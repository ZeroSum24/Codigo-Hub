export interface EmptyAction<Type> {
    readonly type : Type
}

export interface Action<Type, Payload> extends EmptyAction<Type> {
    readonly payload : Payload
}

type Dispatch<Type> = (action : EmptyAction<Type> | DispatchedAction<Type>) => void;
export type DispatchedAction<Type> = (dispatch: Dispatch<Type>) => void;