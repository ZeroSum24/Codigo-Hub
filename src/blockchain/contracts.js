import { currentAccount, web3, ethereum } from './client';
import Firmware from '../model/Firmware';

export const firmwareRepoAddress = '0x3691B2BE18f186b475e81342585790DcBaC43A0b';
export const abiFR = [
  {
    'constant': true,
    'inputs': [
      {
        'name': 'device_type',
        'type': 'string'
      },
      {
        'name': 'i',
        'type': 'uint256'
      }
    ],
    'name': 'get_developer',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'get_t',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'get_trust_version',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'device_type',
        'type': 'string'
      },
      {
        'name': 'stable',
        'type': 'bool'
      }
    ],
    'name': 'get_most_trusted_firmware',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'string'
      },
      {
        'name': '',
        'type': 'string'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'int256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'nonce',
        'type': 'uint256'
      }
    ],
    'name': 'proofOfWork',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'v',
        'type': 'uint256'
      }
    ],
    'name': 'set_version',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'get_d',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'firmware_hash_',
        'type': 'bytes32'
      },
      {
        'name': 'IPFS_link_',
        'type': 'string'
      },
      {
        'name': 'description_',
        'type': 'string'
      },
      {
        'name': 'device_type_',
        'type': 'string'
      },
      {
        'name': 'stable',
        'type': 'bool'
      }
    ],
    'name': 'add_firmware',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'get_version',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'trust_address',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'description_',
        'type': 'string'
      },
      {
        'name': 'device_type',
        'type': 'string'
      },
      {
        'name': 'stable',
        'type': 'bool'
      }
    ],
    'name': 'edit_description',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'device_type',
        'type': 'string'
      },
      {
        'name': 'mf_address',
        'type': 'address'
      },
      {
        'name': 'stable',
        'type': 'bool'
      }
    ],
    'name': 'get_firmware',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'string'
      },
      {
        'name': '',
        'type': 'string'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'v',
        'type': 'uint256'
      }
    ],
    'name': 'set_trust_version',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'get_c',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  }
];
export const abiWOT = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "device_type",
        "type": "string"
      },
      {
        "name": "i",
        "type": "uint256"
      }
    ],
    "name": "get_developer",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get_t",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get_trust_version",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "device_type",
        "type": "string"
      },
      {
        "name": "stable",
        "type": "bool"
      }
    ],
    "name": "get_most_trusted_firmware",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "name": "proofOfWork",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "v",
        "type": "uint256"
      }
    ],
    "name": "set_version",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get_d",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "firmware_hash_",
        "type": "bytes32"
      },
      {
        "name": "IPFS_link_",
        "type": "string"
      },
      {
        "name": "description_",
        "type": "string"
      },
      {
        "name": "device_type_",
        "type": "string"
      },
      {
        "name": "stable",
        "type": "bool"
      }
    ],
    "name": "add_firmware",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get_version",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "trust_address",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "description_",
        "type": "string"
      },
      {
        "name": "device_type",
        "type": "string"
      },
      {
        "name": "stable",
        "type": "bool"
      }
    ],
    "name": "edit_description",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "device_type",
        "type": "string"
      },
      {
        "name": "mf_address",
        "type": "address"
      },
      {
        "name": "stable",
        "type": "bool"
      }
    ],
    "name": "get_firmware",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "v",
        "type": "uint256"
      }
    ],
    "name": "set_trust_version",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get_c",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];
export const identityAddress = "0xF665D2AA03aeA414522f684f14543b15DDbbE9F0";
export const identityABI = [
  {
    "type": "event",
    "name": "Challenge",
    "inputs": [{"indexed": false, "name": "challenge", "type": "bytes32"}]
  },
  {
    "type": "function",
    "name": "challenge",
    "constant": false,
    "payable": false,
    "stateMutability": "nonpayable",
    "inputs": [{"name": "address_to_claim", "type": "address"}],
    "outputs": []
  },
  {
    "type": "function",
    "name": "response",
    "constant": false,
    "payable": false,
    "stateMutability": "nonpayable",
    "inputs": [{"name": "response_value", "type": "bytes"}],
    "outputs": []
  },
  {
    "type": "function",
    "name": "response_decomposed",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [
      {"name": "r", "type": "bytes32"},
      {"name": "s", "type": "bytes32"},
      {"name": "v", "type": "uint8"}
    ]
  },
  {
    "type": "function",
    "name": "get_codigo_address",
    "constant": false,
    "payable": false,
    "stateMutability": "view",
    "inputs": [{"name": "addr", "type": "address"}],
    "outputs": [{"name": "", "type": "address"}]
  },
  {
    "type": "function",
    "name": "get_3box_address",
    "constant": false,
    "payable": false,
    "stateMutability": "view",
    "inputs": [{"name": "addr", "type": "address"}],
    "outputs": [{"name": "", "type": "address"}]
  }
];
export const usersAddress = "0x3A906f5CacE37531A6326a53267A81ac0Ebb8157"
export const usersABI = [
  {
    "type": "function",
    "name": "incrRep",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [{"name": "target", "type": "address"}],
  },
  {
    "type": "function",
    "name": "decrRep",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [{"name": "target", "type": "address"}],
  },
  {
    "type": "function",
    "name": "getRep",
    "constant": false,
    "payable": false,
    "stateMutablilty": "view",
    "inputs": [{"name": "user", "type": "address"}],
    "outputs": [{"name": "", "type": "uint"}]
  },
  {
    "type": "function",
    "name": "userExists",
    "constant": false,
    "payable": false,
    "stateMutablilty": "view",
    "inputs": [{"name": "user", "type": "address"}],
    "outputs": [{"name": "", "type": "bool"}]
  },
  {
    "type": "function",
    "name": "getAllUsers",
    "constant": false,
    "payable": false,
    "stateMutablilty": "view",
    "outputs": [{"name": "", "type": "address[]"}]
  },
  {
    "type": "function",
    "name": "register",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable"
  },
  {
    "type": "function",
    "name": "deregister",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable"
  }
];

let firmwareRepo = null;
let wot = null;
let identity = null;
let users = null;

/**
 * Hardcoded constants to define all possible developers and device types. Please add your account address and favorite
 * devices here
 */
export const hardcoded_developers = ['0x6d2f650eb7d7dce957c9fb19ca79adf535a93dde'];
export const hardcoded_device_types = ['RPI4', 'Uno'];

/**
 * Retrieve instance of firmware repo contract
 * @return {Contract} `firmwareRepo` returns the firmware Repo deployed contract
 */
export function getFirmwareRepo() {
  if (firmwareRepo == null) {
    firmwareRepo = new web3.eth.Contract(abiFR, firmwareRepoAddress);
  }
  return firmwareRepo;
}

/**
 * Retrieve instance of web of trust contract
 * @return {Promise<Contract>} `wot` web of trust deployed contract
 */
export async function getWOT() {
  if (wot == null) {
    getWOTAddress().then(address => {
      wot = new web3.eth.Contract(abiWOT, address);
      return wot;
    })
  }
  return Promise.resolve(wot);
}

function getWOTAddress() {
  return getFirmwareRepo().methods.trust_address().call();
}

/**
 * Retrieve instance of the identity contract
 * @return {Contract} the identity contract
 */
function getIdentity() {
  if (identity == null) {
    identity = new web3.eth.Contract(identityABI, identityAddress);
  }
  return identity;
}

/**
 * Retrieve instance of the users contract
 * @return {Contract} the users contract
 */
function getUsers() {
  if (users == null) {
    users = new web3.eth.Contract(usersABI, usersAddress);
  }
  return users;
}

/**
 * register IPFS uploaded firmware to firmware repo smart contract
 * @param {String} `firmware_hash` SHA3 hash of firmware binary file
 * @param {String} `IPFS_link`
 * @param {String} `description`
 * @param {String} `device_type`
 * @return {Promise<string>} `tx_hash` hash of transaction
 */
export function registerFirmware(firmware_hash, IPFS_link, description, device_type) {
  if (currentAccount == null) throw Error('Initialize account first');
  return sendTransaction(firmwareRepoAddress,
    getFirmwareRepo().methods.add_firmware(firmware_hash, IPFS_link, description, device_type, true).encodeABI())
}

/**
 * polls firmware repo for firmware for all hardcoded device types and hardcoded developers
 * @return {Promise<Firmware[]>} `promises`
 */
export function retrieveAllAvailableFirmware() {
  const promises = [];
  hardcoded_device_types.forEach(dev_type => hardcoded_developers
    .forEach(dev_addr => promises.push(retrieveFirmware(dev_type, dev_addr))));
  return Promise.all(promises).then(responses => responses.filter(f => f != null));
}

export function retrieveFirmware(device_type, developer_address) {
  return getFirmwareRepo().methods.get_firmware(device_type, developer_address, true).call().then(result => {
    return new Firmware(result[0], result[1], result[2], result[3], developer_address, device_type);
  }, () => null);
}

// doesn't work yet, overflows for some reason
export function retrieveMostTrustedFirmwareForDevice(device_type) {
  return getFirmwareRepo().methods.get_most_trusted_firmware(device_type, true).call().then(result => {
    return {fw: new Firmware(result[0], result[1], result[2], result[3]), dev: result[4], trusted: result[5]};
  });
}

/**
 * challenge method on identity contract
 * @param {String} The address to associate with the current address
 * @returns {Promise<String>} The challenge, should be signed by web3.eth.accounts.sign then passed to sendResponse
 */
export function getChallenge(addressToClaim) {
  return new Promise((resolve, _) => {
    getIdentity().methods.challenge(addressToClaim).send({from: ethereum.selectedAddress}).on('receipt', r => {
      resolve(r.events.Challenge.returnValues.challenge);
    });
  });
}

/**
 * response_decomposed method on identity contract
 * @param {String} The response value
 * @return {Promise<String>} hash of transaction
 */
export function sendResponse(response) {
    return sendTransaction(identityAddress,
      getIdentity().methods.response_decomposed(response.r, response.s, response.v).encodeABI());
}

/**
 * Map the user (3box) address to the developer (codigo) address
 * @param {String} the user address
 * @return {Promise<String>} the developer address (if there is no mapping it
 * returns an all zero address, e.g "0x000...")
 */
export function getDeveloperAddress(userAddress) {
    return getIdentity().methods.get_codigo_address(userAddress).call();
}

/**
 * Map the developer (codigo) address to the user (3box) address
 * @param {String} the developer address
 * @return {Promise<String>} the user address (if there is no mapping it returns
 * an all zero address, e.g "0x0000...")
 */
export function getUserAddress(developerAddress) {
    return getIdentity().methods.get_3box_address(developerAddress).call();
}

/**
 * Wait a random delay between 0 and 10 seconds then add to the target user's reputation
 * @params {String} the address of the target user
 * @return {Promise<String>} the transaction hash
 */
export function addRepToUser(userAddress) {
  const delayMs = Math.floor(Math.random() * 10000);
  return new Promise(
    (resolve, _) => {
      setTimeout(
        async () => {
          const hash = await sendTransaction(usersAddress,
            getUsers().methods.incrRep(userAddress).encodeABI());
          resolve(hash);
        },
        delayMs
      );
    });
}

/**
 * Wait a random delay between 0 and 10 seconds then subtract from the target
 * user's reputation
 * @params {String} the address of the target user
 * @return {Promise<String>} the transaction hash
 */
export function removeRepFromUser(userAddress) {
  const delayMs = Math.floor(Math.random() * 10000);
  return new Promise(
    (resolve, _) => {
      setTimeout(
        async () => {
          const hash = await sendTransaction(usersAddress,
            getUsers().methods.decrRep(userAddress).encodeABI());
          resolve(hash);
        },
        delayMs
      );
    });
}

/**
 * Retrieve the reputation of a user
 * @params {String} the address of the user
 * @return {Number} the user's reputation
 */
export function getUserRep(userAddress) {
  return getUsers().methods.getRep(userAddress).call();
}

/**
 * Check whether a user exists
 * @params {String} the address of the user
 * @return {bool} True if the user exists, else false
 */
export function userExists(userAddress) {
  return getUsers().methods.userExists(userAddress).call();
}

/**
 * Get all existing users
 * @return {String[]} The addresses of all users
 */
export function getAllUsers() {
  return getUsers().methods.getAllUsers().call();
}

/**
 * Register the current user
 * @return {Promise<String>} The transaction hash
 */
export function registerCurrentUser() {
  return sendTransaction(usersAddress, getUsers().methods.register().encodeABI());
}

/**
 * Deregister the current user
 * @return {Promise<String>} The transaction hash
 */
export function deregisterCurrentUser() {
  return sendTransaction(usersAddress, getUsers().methods.deregister().encodeABI());
}

/**
 * data is only necessary for contract transactions, it can be computed with encodeABI from web3
 * @param {String} `to` address
 * @param {String} `data` abi encoded dats
 * @return {Promise<string>} `tx_hash` hash of transaction
 */
function sendTransaction(to, data) {
  const transactionParameters = {
    to: to, // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    data: data, // Optional, but used for defining smart contract creation and interaction.
  };

// txHash is a hex string
// As with any RPC call, it may throw an error
  return ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });
}
