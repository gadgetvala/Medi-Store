// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

contract MediStore {
    /*
     * List Of Every User Details.
     * mapping: userAddress -> userDetails
     */
    mapping(address => User) users;

    /*
     * A user can specify, which doctors are allowed to view their medical records.
     * Access is granted, when the user adds his address to a doctors list of patients.
     * As soon as the user address is removed from the list, access for the doctor is revoked.
     *
     * mapping: doctorsAddress -> patientsAddresses
     */
    mapping(address => address[]) public doctorsPermissions;

    /*
     * Patient & Doctor Structure
     */
    struct User {
        address id;
        string name;
        string role;
        string dob;
        string userAddress;
        string[] data;
        int256 totalDoctors;
        int256 totalDocuments;
    }

    /*
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
        users[msg.sender].totalDoctors = 0;
        users[msg.sender].totalDocuments = 0;
    }

    /*
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
            uint256 dataSize,
            int256 totalDoctors
        )
    {
        return (
            users[msg.sender].id,
            users[msg.sender].name,
            users[msg.sender].role,
            users[msg.sender].dob,
            users[msg.sender].userAddress,
            users[msg.sender].data.length,
            users[msg.sender].totalDoctors
        );
    }

    /*
     * Returns User Data Length
     */
    function getDataSize() public view returns (uint256) {
        return users[msg.sender].data.length;
    }

    /*
     * Returns User Data Hash of Particular Index
     */
    function getData(uint256 _index) public view returns (string memory) {
        return users[msg.sender].data[_index];
    }

    /*
     * Allow doctor to view all your documents.
     */
    function giveAccessToDoctor(address _doctor) public {
        users[msg.sender].totalDoctors += 1;
        doctorsPermissions[_doctor].push(msg.sender);
    }

    /*
     * Revoke doctors access from your documents.
     */
    function revokeAccessFromDoctor(address doctor, uint256 index) public {
        require(
            doctorsPermissions[doctor][index] == msg.sender,
            "You can only revoke access to your own documents."
        );
        delete doctorsPermissions[doctor][index];
        users[msg.sender].totalDoctors -= 1;
    }

    /*
     * Get All User of Particular Doctor
     */
    function getUsersOfParticularDoctor(address _doctor)
        public
        view
        returns (address[] memory)
    {
        return doctorsPermissions[_doctor];
    }
}
