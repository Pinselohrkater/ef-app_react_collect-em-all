import * as actionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function scoreboardReducer(state = initialState.scoreboard, action) {

    switch (action.type) {

        case actionTypes.SCOREBOARD_SET_BUSY_STATE:
            return Object.assign({}, state, { isBusy: action.isBusy });

        case actionTypes.SCOREBOARD_RECEIVE_PLAYERPARTICIPATION:
            return Object.assign({}, state, {
                playerParticipations: action.dto
            });
        case actionTypes.SCOREBOARD_RECEIVE_FURSUITPARTICIPATION:
            return Object.assign({}, state, {
                fursuitParticipations: action.dto
            });

        default:
            return state;
    }
}