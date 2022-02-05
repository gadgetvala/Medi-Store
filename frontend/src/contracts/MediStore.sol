pragma solidity >=0.5.0;

contract MediStore {
    /**
     * List Of Every User Details.
     * mapping: userAddress -> userDetails
     */
    mapping(address => User) users;

    /**
     * A user can specify, which doctors are allowed to view their medical records.
     * Access is granted, when the user adds his address to a doctors list of patients.
     * As soon as the user address is removed from the list, access for the doctor is revoked.
     *
     * mapping: doctorsAddress -> patientsAddresses
     */
    mapping(address => address[]) public doctorsPermissions;

    /**
     * Patient & Doctor Structure
     */
    struct User {
        address id;
        string name;
        string role;
        string dob;
        string userAddress;
        string[] data;
    }

    /**
     * Create a new user
     */
    function newUser(
        string memory _name,
        string memory _role,
        string memory _dob,
        string memory _userAddress
    ) public {
        users[msg.sender].id = msg.sender;
        users[msg.sender].name = _name;
        users[msg.sender].role = _role;
        users[msg.sender].dob = _dob;
        users[msg.sender].userAddress = _userAddress;
    }

    /**
     * Get User Address
     */
    function getUserAddress() public view returns (address) {
        return msg.sender;
    }

    /**
     * Add Imag
     */
    function addImage(string memory _data) public {
        users[msg.sender].data.push(_data);
    }

    /*
     * Solidity can't return string arrays,
     * So we'll have to give the index.
     */
    function getUserData()
        public
        view
        returns (
            address id,
            string memory name,
            string memory role,
            string memory dob,
            string memory userAddress,
            uint256 dataSize
        )
    {
        return (
            users[msg.sender].id,
            users[msg.sender].name,
            users[msg.sender].role,
            users[msg.sender].dob,
            users[msg.sender].userAddress,
            users[msg.sender].data.length
        );
    }

    /**
     * Returns User Data Length
     */
    function getDataSize() public view returns (uint256) {
        return users[msg.sender].data.length;
    }

    /**
     * Returns User Data Hash of Particular Index
     */
    function getData(uint256 _index) public view returns (string memory) {
        return users[msg.sender].data[_index];
    }

    /**
     * Allow a doctor to view all your documents.
     */
    function giveAccessToDoctor(address doctor) public {
        doctorsPermissions[doctor].push(msg.sender);
    }

    /**
     * Revoke a doctors access to your documents.
     */
    function revokeAccessFromDoctor(address doctor, uint256 index) public {
        require(
            doctorsPermissions[doctor][index] == msg.sender,
            "You can only revoke access to your own documents."
        );
        delete doctorsPermissions[doctor][index];
    }

    /**
     * Returns all the patients addresses that gave the doctor access.
     */
    function getDoctorsPermissions(address doctor)
        public
        view
        returns (address[] memory)
    {
        return doctorsPermissions[doctor];
    }
}
