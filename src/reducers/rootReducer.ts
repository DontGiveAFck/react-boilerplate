import {createStore, combineReducers, Reducer, ReducersMapObject} from "redux";
import {DefaultState, State} from '../types/state'
import {variableReducer} from '../reducers/reducer';
import {Action} from "../actions/action";
export const defaultState = {
    variable: true
};
export const initialState: State = {
    default: defaultState
};

export type Reducers = ReducersMapObject<State>;
export type LoadedReducers = Partial<Reducers>;

const rootReducer: Reducer = combineReducers<State>({
    default: variableReducer
});

export const store = createStore(
    rootReducer,
    initialState,
    // for redux devtools
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

