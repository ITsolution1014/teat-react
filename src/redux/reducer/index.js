import {combineReducers} from 'redux';

import completionsReducer from './completions';

export default combineReducers({
    completions: completionsReducer
});

