import {DefaultState} from "../types/state";
import {Action, CHANGE_VARIABLE} from "../actions/action";
import {defaultState} from "./rootReducer";
import {Reducer} from "redux";


function changeVariable(
    state: DefaultState,
    action: Action
): DefaultState {
    return {
        variable: action.value
    };
}

export const variableReducer: Reducer<DefaultState, Action> = (
    state: DefaultState = defaultState,
    action: Action
): DefaultState => {
    switch(action.type){
        case CHANGE_VARIABLE:
            return changeVariable(state, action);
        default:
            return state;
    }
};
