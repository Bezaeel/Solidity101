// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract data_types {
  struct User {
    string name;
    string country;
  }

  User[] public users;

  function AddUser(string memory _name, string memory _country) public {
    User memory _user = User(_name, _country);
    users.push(_user);
  }

  function GetUser(uint index) public view returns (string memory, string memory){
    return (users[index].name, users[index].country);
  }
}
