import * as types from './actionTypes';

import { getApiUrl } from './../consts/apiUrl';

export function setScoreboardBusyState(isBusy) {
    return { type: types.SCOREBOARD_SET_BUSY_STATE, isBusy };
}

export function updateScoreboard() {

    return (dispatch) => {
        dispatch(setScoreboardBusyState(true));

        return dispatch(getPlayerParticipations())
            .then(() => dispatch(getFursuitParticipations()))
            .then(() => dispatch(setScoreboardBusyState(false)));

    }
}

function getPlayerParticipations() {
    return (dispatch) => {

        return fetch(getApiUrl() + "Fursuits/CollectingGame/PlayerParticipation/Scoreboard", {
            cache: 'no-cache',
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(response => { if (!response.ok) throw Error(response.statusText); return response; })
            .then(response => response.json())
            .then(json => dispatch({ type: types.SCOREBOARD_RECEIVE_PLAYERPARTICIPATION, dto: json }));
    };
}


function getFursuitParticipations() {
    return (dispatch) => {

        return fetch(getApiUrl() + "Fursuits/CollectingGame/FursuitParticipation/Scoreboard", {
            cache: 'no-cache',
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(response => { if (!response.ok) throw Error(response.statusText); return response; })
            .then(response => response.json())
            .then(json => dispatch({ type: types.SCOREBOARD_RECEIVE_FURSUITPARTICIPATION, dto: json }));
    };
}
