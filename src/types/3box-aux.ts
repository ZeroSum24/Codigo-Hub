interface PrivateSpace
{
    get(key : string) : Promise<string>;
    set(key: string, value: string) : Promise<void>;
}

export interface Space {
    syncDone : Promise<void>;
    private: PrivateSpace
}

//TODO: Workaround for a problem in 3box.d.ts
type _Space = Space;
declare global {
    type Space = _Space;
}