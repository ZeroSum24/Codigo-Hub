export interface MetamaskEthApi {
    request : (request : { method : string }) => Promise<string[]>
}

//TODO: Workaround for a problem in 3box.d.ts
type _MetamaskEthApi = MetamaskEthApi;
declare global {
    type MetamaskEthApi = _MetamaskEthApi;
}