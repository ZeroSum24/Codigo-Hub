import Web3 from 'web3';

export const ethereum = window.ethereum;
export let web3 = new Web3(ethereum);

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
