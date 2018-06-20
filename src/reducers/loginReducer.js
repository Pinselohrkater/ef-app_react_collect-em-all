import * as actionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case actionTypes.LOGIN_LOGOUT: 
            return initialState.login;

        case actionTypes.LOGIN_RESET_STATE: 
            return Object.assign({}, state, { isBusy: false, isFailed: false });

        case actionTypes.LOGIN_SEND_CREDENTIALS:
            return Object.assign({}, state, { isBusy: true });

        case actionTypes.LOGIN_RECEIVE_RESPONSE:
            newState.isBusy = false;

            if (action.success) {
                newState = Object.assign(newState, {
                    uid: action.dto.Uid,
                    username: action.dto.Username,
                    token: action.dto.Token,
                    tokenValidUntil: action.dto.TokenValidUntil,
                    isLoggedOn: true,
                    isFailed: false
                });
            } else {
                newState = Object.assign(newState, { isFailed: true });
            }

            return newState;
        default:
            return state;
    }
}