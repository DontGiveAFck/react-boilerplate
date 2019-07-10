import {createStore, combineReducers, ReducersMapObject} from "redux";
import { State } from '../types/state'
import reducer from '../reducers/reducer';
export const initialState: State = {
    variable: true
};

const rootReducer = combineReducers(
    reducer,
);

export const store = createStore(
    rootReducer,
    initialState,
    // for redux devtools
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

