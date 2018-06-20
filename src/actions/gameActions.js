import * as types from './actionTypes';

import { getApiUrl } from './../consts/apiUrl';

export function setGameBusyState(isBusy) {
    return { type: types.GAME_SET_BUSY_STATE, isBusy };
}

export function playerParticipationQuery() {
    return (dispatch, getState) => {
        var loginState = getState().login;

        return fetch(getApiUrl() + "Fursuits/CollectingGame/PlayerParticipation", {
            cache: 'no-cache',
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + loginState.token
            },
        })
            .then(response => { if (!response.ok) throw Error(response.statusText); return response; })
            .then(response => response.json())
            .then(json => dispatch(playerParticipationReceiveResponse(true, json)))
            .catch(error => dispatch(playerParticipationReceiveResponse(false, null)));
    };
}

export function playerParticipationReceiveResponse(success, json) {
    return { type: types.PLAYERPARTICIPATION_RECEIVE_RESPONSE, success, dto: json };
}


export function collectToken(token) {

    return (dispatch, getState) => {
        dispatch(setGameBusyState(true));
        dispatch({ type: types.GAME_COLLECT_TOKEN, token });

        var loginState = getState().login;

        return fetch(getApiUrl() + "Fursuits/CollectingGame/PlayerParticipation/CollectToken", {
            body: JSON.stringify(token),
            cache: 'no-cache',
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + loginState.token
            },
        })
            .then(response => {
                if (response.ok)
                    return response.json()
                        .then(json => dispatch({ type: types.GAME_COLLECT_TOKEN_SUCCESS, dto: json }))
                        .then(_ => dispatch(setGameBusyState(false)));

                return response.json()
                    .then(json => dispatch({ type: types.GAME_COLLECT_TOKEN_FAIL, error: json }))
                    .then(_ => dispatch(setGameBusyState(false)));
            })
    };
}

export function askForToken() {
    return (dispatch) => {
        dispatch(setGameBusyState(true));

        return dispatch(playerParticipationQuery())
            .then(_ => dispatch({ type: types.GAME_ASK_FOR_TOKEN }))
            .then(_ => dispatch(setGameBusyState(false)));
    }
}
