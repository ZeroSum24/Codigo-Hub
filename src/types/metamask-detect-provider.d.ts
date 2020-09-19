declare module '@metamask/detect-provider' {
    export type EthereumProvider = {} //TODO: Figure out a real type definition
    function detectEthereumProvider() : Promise<EthereumProvider>
    export = detectEthereumProvider
}