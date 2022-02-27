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
        int256 totalPatient;
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
        users[msg.sender].totalPatient = 0;
    }

    /*
     * Get User Data
     */
    function getUserData(address _userAddress)
        public
        view
        returns (
            address id,
            string memory name,
            string memory role,
            string memory dob,
            string memory userAddress,
            int256 totalDoctors,
            int256 totalDocuments,
            int256 totalPatient
        )
    {
        /* Store Data in Memory
         * Directly Processing deeping Nested Object,
         * Create Issue
         */
        User memory _user = users[_userAddress];

        return (
            _user.id,
            _user.name,
            _user.role,
            _user.dob,
            _user.userAddress,
            _user.totalDoctors,
            _user.totalDocuments,
            _user.totalPatient
        );
    }

    /*
     * Get All Patient Documents
     */
    function getPatientDocuments(address _userAddress)
        public
        view
        returns (string[] memory)
    {
        return users[_userAddress].data;
    }

    /*
     * Add Patient Document
     */
    function addPatientDocument(string memory _data) public {
        users[msg.sender].data.push(_data);
        users[msg.sender].totalDocuments += 1;
    }

    /*
     * Remove Patient Document
     */
    function removePatientDocument(uint256 _index) public {
        delete users[msg.sender].data[_index];
        users[msg.sender].totalDocuments -= 1;
    }

    /*
     * Allow doctor to view all your documents.
     */
    function giveAccessToDoctor(address _doctor) public {
        // Update User Total Doctos Count
        users[msg.sender].totalDoctors += 1;
        // Update Doctor Total Patient Count
        users[_doctor].totalPatient += 1;
        // Give Access to Doctor
        doctorsPermissions[_doctor].push(msg.sender);
    }

    /*
     * Revoke doctors access from your documents.
     */
    function revokeAccessFromDoctor(address _doctor, uint256 _index) public {
        require(
            doctorsPermissions[_doctor][_index] == msg.sender,
            "You can only revoke access to your own documents."
        );
        // Remove User Address from Doctor Permission list
        delete doctorsPermissions[_doctor][_index];
        // Update Paitent Total Document Count
        users[msg.sender].totalDoctors -= 1;
        // Update Doctor Total Patient Count
        users[_doctor].totalPatient -= 1;
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
