import {DefaultState, State} from "../types/state";
import {Action, CHANGE_VARIABLE, ChangeVariable} from "../actions/action";
import {defaultState, initialState} from "./rootReducer";
import {Reducer} from "redux";


function changeVariable(
    state: DefaultState,
    action: ChangeVariable
): DefaultState {
    return {
        variable: action.value
    };
}

export const variableReducer: Reducer<State, Action> = (
    state: DefaultState = defaultState,
    action: Action,
    fullState: State
): DefaultState => {
    switch(action.type){
        case CHANGE_VARIABLE:
            return changeVariable(state, action);
        default:
            return state;
    }
};
