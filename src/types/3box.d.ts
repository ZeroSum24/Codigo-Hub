//TODO: Can't figure out how to import types from metamask-eth-api.ts and 3box-aux.ts. Need to work out exactly how these declaration files work
declare module '3box' {
    interface Profile {
        name: string,
        description: string,
        image: string,
        website: string
    }
    class Box {
        static getProfile(address: string) : Promise<Profile>;
        static create(eth : MetamaskEthApi) : Promise<Box>;

        syncDone : Promise<void>;

        auth(spaces: string[], address: {address: string}) : Promise<void>;
        openSpace(space : string) : Promise<Space>
    }
    export = Box
}