//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract identity {
    struct InProgressChallenge {
        address address_to_claim;
        bytes32 challenge;
    }
    
    mapping(address => InProgressChallenge) challenges_in_progress;
    mapping(address => address) _3box_to_codigo;
    mapping(address => address) codigo_to_3box;

    event Challenge(bytes32 challenge);

    function challenge(address address_to_claim) public {
        bytes32 challenge_value = generate_challenge();
        challenges_in_progress[msg.sender] = InProgressChallenge(address_to_claim, challenge_value);
        emit Challenge(challenge_value);
    }

    function response(bytes memory response_value) public {
        bytes32 r;
        bytes32 s;
        uint8 v;
        (r, s, v) = decompose_response(response_value);
        response_decomposed(r, s, v);
    }

    function response_decomposed(bytes32 r, bytes32 s, uint8 v) public {
        require(challenges_in_progress[msg.sender].address_to_claim != address(0));
        address expected_address = challenges_in_progress[msg.sender].address_to_claim;
        bytes32 challenge = challenges_in_progress[msg.sender].challenge;
        address signing_address = get_signer(challenge, r, s, v);
        require(signing_address == expected_address);
        delete challenges_in_progress[msg.sender];
        _3box_to_codigo[msg.sender] = expected_address;
        codigo_to_3box[expected_address] = msg.sender;
    }

    function get_codigo_address(address addr) public view returns (address) {
        return _3box_to_codigo[addr];
    }

    function get_3box_address(address addr) public view returns (address) {
        return codigo_to_3box[addr];
    }
    
    // From: https://stackoverflow.com/questions/58188832/solidity-generate-unpredictable-random-number-that-does-not-depend-on-input
    function generate_challenge() private view returns (bytes32) {
        return keccak256(
            abi.encodePacked(
                block.timestamp + block.difficulty +
                ((uint256(keccak256(abi.encodePacked(block.coinbase)))) / (now)) +
                block.gaslimit + 
                ((uint256(keccak256(abi.encodePacked(msg.sender)))) / (now)) +
                block.number
                ));
    }

    // From: https://gist.github.com/BjornvdLaan/e41d292339bbdebb831d0b976e1804e8
    function decompose_response(bytes memory response) private pure returns (bytes32, bytes32, uint8) {
        require(response.length == 65);
        bytes32 r;
        bytes32 s;
        uint8 v;

        // Divide the signature in r, s and v variables
        // ecrecover takes the signature parameters, and the only way to get them
        // currently is to use assembly.
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            r := mload(add(response, 32))
            s := mload(add(response, 64))
            v := byte(0, mload(add(response, 96)))
        }

        // Version of signature should be 27 or 28, but 0 and 1 are also possible versions
        if (v < 27) {
            v += 27;
        }

        // If the version is correct return the signer address
        require(v == 27 || v == 28);

        return (r, s, v);
    }
    
    function get_signer(bytes32 challenge, bytes32 r, bytes32 s, uint8 v) private pure returns (address) {
        // solium-disable-next-line arg-overflow
        return ecrecover(make_web3js_compatible(challenge), v, r, s);
    }

    // web3.eth.sign actually signs hash("\x19Ethereum Signed Message:\n" + len(message) + message)
    function make_web3js_compatible(bytes32 message) private pure returns (bytes32) {
        return keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", message)
            );
    }
}
