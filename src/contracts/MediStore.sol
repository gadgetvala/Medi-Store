pragma solidity 0.5.0;

contract MediStore {
    mapping(address => User) users;

    struct User {
        address id;
        string name;
        string role;
        string dob;
        string userAddress;
        string[] data;
    }

    // Create a new user.
    function newUser(
        string memory _name,
        string memory _role,
        string memory _dob,
        string memory _userAddress
    ) public {
        // In a mapping, all elements are defined. They're just empty by default
        // So, just setting the id will create a new user;
        users[msg.sender].id = msg.sender;
        users[msg.sender].name = _name;
        users[msg.sender].role = _role;
        users[msg.sender].dob = _dob;
        users[msg.sender].userAddress = _userAddress;
    }

    // Get User Address
    function getUserAddress() public view returns (address) {
        return msg.sender;
    }

    // Add Image
    function addImage(string memory _data) public {
        users[msg.sender].data.push(_data);
    }

    // Solidity can't return string arrays. So we'll have to provide the _dataIndex
    // Of the piece of data we want
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

    // Returns the amount of strings in a User's data array
    function getDataSize() public view returns (uint256) {
        return users[msg.sender].data.length;
    }

    // Returns the amount of strings in a User's data array
    function getData(uint256 _index) public view returns (string memory) {
        return users[msg.sender].data[_index];
    }
}
