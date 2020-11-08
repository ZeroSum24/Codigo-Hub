export type Optional<T> = T | null | undefined;
export const None : Optional<any> = null;

export function exists<T>(it : Optional<T>) : boolean {
    return it !== null && it !== undefined;
}

export function isNone<T>(it : Optional<T>) : boolean {
    return !exists(it);
}

export function value<T>(it : Optional<T>) : T {
    console.assert(exists(it));
    return it as T;
}

export function assertNotNull<T>(it : Optional<T>) : T | undefined {
    console.assert(it !== null);
    return it as T | undefined;
}

export function assertDefined<T>(it : Optional<T>) : T | null {
    console.assert(it !== undefined);
    return it as T | null;
}