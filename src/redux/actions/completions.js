import ActionTypes from './actionTypes';

import axios from 'axios';

import * as config from '../../static/constants';

export const CompletionsInfo = (info) => async dispatch => {
    try {
        let res = await axios.post(`${config.BACKEND_URL}receive/`,{info});
        dispatch({
            type: ActionTypes.CompletionsInfo,
            payload: res.data
        })
    } catch(err) {
        console.log(err, 'CompletionsInfo');
    }
}