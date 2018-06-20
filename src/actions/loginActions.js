import * as types from './actionTypes';

import { getApiUrl } from './../consts/apiUrl';

export function sendCredentials(regNo, username, password) {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_SEND_CREDENTIALS });

        return fetch(getApiUrl() + "Tokens/RegSys", {
            body: JSON.stringify({
                Username: username,
                RegNo: regNo,
                Password: password
            }),
            cache: 'no-cache',
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok)
                    return response.json()
                        .then(json => dispatch(receiveResponse(true, json)));

                return dispatch(receiveResponse(false, null));
            })

    };
}

export function verifyToken(token) {
    return (dispatch) => {
        dispatch({ type: types.LOGIN_SEND_CREDENTIALS });

        return fetch(getApiUrl() + "Tokens/WhoAmI", {
            cache: 'no-cache',
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            },
        })
            .then(response => {
                if (response.ok)
                    return response.json()
                        .then(json => dispatch(receiveResponse(true, { ...json, Token: token })));

                return dispatch(receiveResponse(false, null));
            })
    };
}

export function receiveResponse(success, json) {
    return { type: types.LOGIN_RECEIVE_RESPONSE, success, dto: json }
}

export function resetState() {
    return { type: types.LOGIN_RESET_STATE };
}

export function logout() {
    return { type: types.LOGIN_LOGOUT };
}