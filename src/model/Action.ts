export interface EmptyAction<Type> {
    type : Type
}

export interface Action<Type, Payload> extends EmptyAction<Type> {
    payload : Payload
}

type Dispatch<Type> = (action : EmptyAction<Type> | DispatchedAction<Type>) => void;
export type DispatchedAction<Type> = (dispatch: Dispatch<Type>) => void;