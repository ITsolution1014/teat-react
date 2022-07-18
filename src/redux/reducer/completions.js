import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    completionsInfo:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ActionTypes.CompletionsInfo:
            return ({
                ...state,
                completionsInfo: action.payload,
            });
        default:
            return state;
    }
}