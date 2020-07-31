import { web3, ethereum } from './client';
import Firmware, { FirmwareWithThumbs } from '../model/Firmware';
import BN from 'bn.js';
import Bounty from '../model/Bounty';

export const firmwareRepoAddress = '0x3691B2BE18f186b475e81342585790DcBaC43A0b';
export const usersAddress = "0x6227c20850c1f431cABEC5ec3CBD746186101882"
export const identityAddress = "0xF665D2AA03aeA414522f684f14543b15DDbbE9F0";
export const bountiesAddress = "0x8C58B5bf0145370916574E82DDecC4b2793EE888";
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
export const usersABI = [
  {
    "type": "function",
    "name": "incrRep",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [{"name": "target", "type": "address"}],
    "outputs": []
  },
  {
    "type": "function",
    "name": "decrRep",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [{"name": "target", "type": "address"}],
    "outputs": []
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
    "inputs": [],
    "outputs": [{"name": "", "type": "address[]"}]
  },
  {
    "type": "function",
    "name": "register",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "function",
    "name": "deregister",
    "constant": false,
    "payable": false,
    "stateMutablilty": "nonpayable",
    "inputs": [],
    "outputs": []
  }
];
export const bountiesABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "device_type",
        "type": "string"
      }
    ],
    "name": "add_bounty",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "block_num",
        "type": "uint256"
      }
    ],
    "name": "collectBounty",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "get_bounty",
    "outputs": [
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
    "name": "get_number_bounties",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

let firmwareRepo = null;
let identity = null;
let users = null;
let bountiesRepo = null;

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
 * Retrieve instance of the bounties contract
 * @return {Contract} the bounties contract
 */
function getBounties() {
  if (bountiesRepo == null) {
    bountiesRepo = new web3.eth.Contract(bountiesABI, bountiesAddress);
  }
  return bountiesRepo;
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
  if (ethereum.selectedAddress == null) throw Error('Initialize account first');
  return sendTransaction(firmwareRepoAddress,
    getFirmwareRepo().methods.add_firmware(firmware_hash, IPFS_link, description, device_type, true).encodeABI())
}

/**
 * polls firmware repo for firmware for all hardcoded device types and hardcoded developers
 * @return {Promise<Firmware[]>} `promises`
 */
export function retrieveAllAvailableFirmware() {
  const promises = [];
  const currentAccount = ethereum.selectedAddress;
  if (!hardcoded_developers.includes(currentAccount)) hardcoded_developers.push(currentAccount);
  hardcoded_device_types.forEach(dev_type => hardcoded_developers
    .forEach(dev_addr => promises.push(retrieveFirmware(dev_type, dev_addr))));
  return Promise.all(promises).then(responses => responses.filter(f => f != null));
}

export function retrieveFirmware(device_type, developer_address) {
  return getFirmwareRepo().methods.get_firmware(device_type, developer_address, true).call().then(result => {
    return new FirmwareWithThumbs(result[0], result[1], result[2], result[3], developer_address, device_type, result[4] || 0, result[5] || 0);
  }, () => null);
}

export function thumbsUpFirmware(developer, device_type) {
  return thumbsFirmware(true, developer, device_type);
}

export function thumbsDownFirmware(developer, device_type) {
  return thumbsFirmware(false, developer, device_type);
}

function thumbsFirmware(is_thumb_up, developer, device_type) {
  return getFirmwareRepo().methods.thumbs_up_down(is_thumb_up, developer, device_type, true).send({from: ethereum.selectedAddress});
}

// doesn't work yet, overflows for some reason
export function retrieveMostTrustedFirmwareForDevice(device_type) {
  return getFirmwareRepo().methods.get_most_trusted_firmware(device_type, true).call().then(result => {
    return {fw: new Firmware(result[0], result[1], result[2], result[3]), dev: result[4], trusted: result[5]};
  });
}

/**
 * challenge method on identity contract
 * @param {String} addressToClaim address to associate with the current address
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
 * @param {String} response response value
 * @return {Promise<String>} hash of transaction
 */
export function sendResponse(response) {
    return sendTransaction(identityAddress,
      getIdentity().methods.response_decomposed(response.r, response.s, response.v).encodeABI());
}

/**
 * Map the user (3box) address to the developer (codigo) address
 * @param {String} userAddress user address
 * @return {Promise<String>} the developer address (if there is no mapping it
 * returns an all zero address, e.g "0x000...")
 */
export function getDeveloperAddress(userAddress) {
    return getIdentity().methods.get_codigo_address(userAddress).call();
}

/**
 * Map the developer (codigo) address to the user (3box) address
 * @param {String} developerAddress developer address
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
 * @return {Promise<String[]>} The addresses of all users
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
 * Retrieve all bounties, active or collected
 * @return {Promise<Bounty[]>}
 */
export async function retrieveAllBounties() {
  const numberOfBounties = await getBounties().methods.get_number_bounties().call();
  const bounties = [];
  for (let i = 0; i < numberOfBounties; i++) {
    const bounty = await getBounties().methods.get_bounty(i).call();
    bounties.push(bounty);
  }
  return bounties.map(b => new Bounty(b[0], b[1], b[2], b[3], '0', b[4], b[5]));
}

/**
 * Add a new bounty
 * @param {Bounty} bounty
 * @return {Promise<String>} The transaction hash
 */
export function addBounty(bounty) {
  return sendTransaction(
    bountiesAddress,
    getBounties().methods.add_bounty(bounty.description, bounty.description, bounty.model).encodeABI(),
    new BN(web3.utils.toWei(bounty.ethAmount, 'ether'), 10).toString(16)
    );
}

/**
 * Collect the stake of an existing bounty, if eligible
 * @param {String} block_num the block number of the bounty on the blockchain
 * @return {Promise<String>} The transaction hash
 */
export function collectBounty(block_num) {
  return sendTransaction(
    bountiesAddress,
    getBounties().methods.collectBounty(block_num).encodeABI()
  );
}

/**
 * data is only necessary for contract transactions, it can be computed with encodeABI from web3
 * @param {String} `to` address
 * @param {String} `data` abi encoded dats
 * @param {String} `value` value to send to contract call
 * @return {Promise<string>} `tx_hash` hash of transaction
 */
function sendTransaction(to, data, value) {
  const transactionParameters = {
    to: to, // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    data: data, // Optional, but used for defining smart contract creation and interaction.
    value: value,
  };

// txHash is a hex string
// As with any RPC call, it may throw an error
  return ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });
}
