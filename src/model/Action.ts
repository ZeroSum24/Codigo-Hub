export interface Action<Type> {
    readonly type : Type
}

type Dispatch<Type> = (action : Action<Type> | DispatchedAction<Type>) => void;
export type DispatchedAction<Type> = (dispatch: Dispatch<Type>) => void;