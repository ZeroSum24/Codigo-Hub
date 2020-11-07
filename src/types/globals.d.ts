import { MetamaskEthApi } from "./metamask-eth-api";

export declare global {
    interface Window { ethereum : MetamaskEthApi };
}