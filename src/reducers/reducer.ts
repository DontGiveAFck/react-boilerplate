import {State} from "../types/state";
import {Action, CHANGE_VARIABLE, ChangeVariable} from "../actions/action";


function changeVariable(
    state: State,
    action: ChangeVariable
): State {
    return {
        ...state,
        variable: action.value
    };
}

export default function (state: State, action: Action) {
    switch(action.type){
        case CHANGE_VARIABLE:
            return changeVariable(state, action);
        default:
            return state;
    }
}
