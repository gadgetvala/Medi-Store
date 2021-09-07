pragma solidity 0.4.24;

contract MediStore {
    mapping(address => User) users;

    struct User {
        address id;
        string name;
        string role;
        string[] data;
    }

    // Create a new user.
    function newUser(string _name, string _role) public {
        // In a mapping, all elements are defined. They're just empty by default
        // So, just setting the id will create a new user;
        users[msg.sender].id = msg.sender;
        users[msg.sender].name = _name;
        users[msg.sender].role = _role;
    }

    // Add Image
    function addImage(string _data) public {
        users[msg.sender].data.push(_data);
    }

    // Solidity can't return string arrays. So we'll have to provide the _dataIndex
    // Of the piece of data we want
    function getUserData()
        public
        view
        returns (
            string name,
            string role,
            uint256 dataSize
        )
    {
        return (
            users[msg.sender].name,
            users[msg.sender].role,
            users[msg.sender].data.length
        );
    }

    // Returns the amount of strings in a User's data array
    function getDataSize() public view returns (uint256) {
        return users[msg.sender].data.length;
    }

    // Returns the amount of strings in a User's data array
    function getData(uint256 _index) public view returns (string) {
        return users[msg.sender].data[_index];
    }
}
