//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract users {
    struct UserRecord {
        bool exists;
        uint rep;
    }
    
    mapping(address => UserRecord) userRecords;
    address[] existingUsers;

    modifier noSelf(address target) {
        require(target != msg.sender, "You can't modify your own reputation");
        _;
    }
    
    function incrRep(address target) noSelf(target) public {
        userRecords[target].rep = safeAdd(userRecords[target].rep, getChange(msg.sender));
    }

    function decrRep(address target) noSelf(target) public {
        uint change = getChange(msg.sender);
        uint currentRep = userRecords[target].rep;

        // Detect underflow
        if (currentRep > change) {
            userRecords[target].rep = currentRep - change;
        } else {
            userRecords[target].rep = 0;
        }
    }

    function submittedFirmware() public {
        //TODO: require(msg.sender == firmware_repo.sol)
        userRecords[tx.origin].rep = safeAdd(userRecords[target].rep, 10);
    }

    function getRep(address user) public view returns (uint) {
        return userRecords[user].rep;
    }

    function userExists(address user) public view returns (bool) {
        return userRecords[user].exists;
    }

    function getAllUsers() public view returns (address[] memory) {
        return existingUsers;
    }

    function register() public {
        if (!userRecords[msg.sender].exists) {
            userRecords[msg.sender].exists = true;
            existingUsers.push(msg.sender);
        }
    }

    function deregister() public exists(msg.sender) {
        delete userRecords[msg.sender];
        uint index = indexOf(existingUsers, msg.sender);
        existingUsers[index] = existingUsers[existingUsers.length - 1];
        existingUsers.pop();
    }

    // Add without overflow
    function safeAdd(uint a, uint b) private pure returns (uint) {
        uint uintMax = (uint)(-1);
        if (a < uintMax - b) {
            return a + b;
        } else {
            return uintMax;
        }
    }

    function getChange(address source) private view returns (uint) {
        return min(userRecords[source].rep/10, 10);
    }

    function max(uint a, uint b) private pure returns (uint) {
        return a > b ? a : b;
    }
    
    function min(uint a, uint b) private pure returns (uint) {
        return a < b ? a : b;
    }

    function indexOf(address[] memory addresses, address target) private pure returns (uint) {
        for (uint i = 0; i < addresses.length; i++) {
            if (addresses[i] == target) {
                return i;
            }
        }
        require(false, "Unreachable");
    }
}
