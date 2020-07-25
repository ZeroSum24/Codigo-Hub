import Web3 from 'web3';

export let currentAccount = null;
export const ethereum = window.ethereum;
export let web3 = null;

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload();
}

export function getWeb3() {
  // init web3 for read only access on load
    if (ethereum == null) {
      throw Error('Unable to detect ethereum wallet. Some functionality will be lost.');
    }
    web3 = new Web3(ethereum);
    window.web3 = web3;
    return web3;
}

export function initWallet() {
  if (web3 == null) getWeb3();
  return connect();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/
// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.


// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    alert('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    // Do any other work!
  }
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.
export function connect() {
  ethereum.on('chainChanged', handleChainChanged);
  ethereum.on('accountsChanged', handleAccountsChanged);
  return ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
}

export function isWalletConnected() {
  return ethereum.isConnected();
}

export async function sendEth(address) {
  const transactionParameters = {
    to: address,
    from: ethereum.selectedAddress,
    // 0.1 ETH
    value: '0x16345785D8A0000',
  };

// txHash is a hex string
// As with any RPC call, it may throw an error
  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });
  return txHash;
}