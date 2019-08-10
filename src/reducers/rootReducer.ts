import {createStore, combineReducers, Reducer, ReducersMapObject} from "redux";
import {State} from '../types/state'
import {variableReducer} from './reducer';
export const defaultState = {
    variable: true
};
export const initialState: State = {
    default: defaultState
};

export type Reducers = ReducersMapObject<State>;

const rootReducer: Reducer = combineReducers<State>({
    default: variableReducer
});

export const store = createStore(
    rootReducer,
    initialState,
    // for redux devtools
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

