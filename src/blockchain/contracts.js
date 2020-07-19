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

let firmwareRepo = null;
let wot = null;


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
