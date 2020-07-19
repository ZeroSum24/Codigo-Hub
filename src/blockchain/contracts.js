import { currentAccount, web3, ethereum } from './client';

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
export const abiPQ = [
  {
    "constant": true,
    "inputs": [],
    "name": "get_min_node",
    "outputs": [
      {
        "components": [
          {
            "name": "key",
            "type": "int256"
          },
          {
            "name": "value",
            "type": "address"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "uint8"
      }
    ],
    "name": "get_specific_node",
    "outputs": [
      {
        "components": [
          {
            "name": "key",
            "type": "int256"
          },
          {
            "name": "value",
            "type": "address"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "uint8"
      }
    ],
    "name": "get_specific_key",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get_min_key",
    "outputs": [
      {
        "name": "",
        "type": "int256"
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
        "name": "key",
        "type": "int256"
      },
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "insert",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
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
let pq = null;
let wot = null;

/**
 * Retrieve instance of firmware repo contract
 * @return {web3.eth.Contract} `firmwareRepo` returns the firmware Repo deployed contract
 */
export function getFirmwareRepo() {
  if (firmwareRepo == null) {
    firmwareRepo = new web3.eth.Contract(abiFR, firmwareRepoAddress);
  }
  return firmwareRepo;
}

export async function getPQ() {
  if (pq == null) {
    // pq = new web3.eth.Contract(abiPQ, pqAddress);
  }
  return pq;
}

export async function getWOT() {
  if (wot == null) {
    // wot = new web3.eth.Contract(abiWOT, wotAddress);
  }
  return wot;
}

/**
 * register IPFS uploaded firmware to firmware repo smart contract
 * @param {String} `firmware_hash` SHA3 hash of firmware binary file
 * @param {String} `IPFS_link`
 * @param {String} `description`
 * @param {String} `device_type`
 * @param {boolean} `stable`
 * @return {Promise<string>} `tx_hash` hash of transaction
 */
export function registerFirmware(firmware_hash, IPFS_link, description, device_type, stable) {
  if (currentAccount == null) throw Error('Initialize account first');
  return sendTransaction(firmwareRepoAddress,
    getFirmwareRepo().methods.add_firmware(firmware_hash, IPFS_link, description, device_type, stable).encodeABI())
}

export function retrieveFirmwareFrom(firmware_hash, IPFS_link, description, device_type, stable) {
  if (currentAccount == null) throw Error('Initialize account first');
  return getFirmwareRepo().methods.add_firmware(firmware_hash, IPFS_link, description, device_type, stable)
    .send({from: currentAccount});
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
