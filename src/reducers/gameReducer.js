import * as actionTypes from '../actions/actionTypes';
import * as gameStates from '../consts/gameStates'

import initialState from './initialState';

export default function gameReducer(state = initialState.game, action) {
    
    switch (action.type) {

        case actionTypes.GAME_SET_BUSY_STATE:
            return Object.assign({}, state, { isBusy: action.isBusy });        
        
        case actionTypes.PLAYERPARTICIPATION_RECEIVE_RESPONSE:
            if (action.success) {
                return Object.assign({}, state, {
                    playerParticipation: {
                        name: action.dto.Name,
                        isBanned: action.dto.IsBanned,
                        collectionCount: action.dto.CollectionCount,
                        scoreboardRank: action.dto.ScoreboardRank,
                        recentlyCollected: action.dto.RecentlyCollected
                    }
                });
            }
            return state;

        case actionTypes.GAME_ASK_FOR_TOKEN:
            return Object.assign({}, state, {
                state: gameStates.GAMESTATE_ENTER_CODE
            });              

        case actionTypes.GAME_COLLECT_TOKEN: 
            return Object.assign({}, state, {
                state: gameStates.GAMESTATE_VERIFY_CODE_IN_PROGRESS
            });        

        case actionTypes.GAME_COLLECT_TOKEN_SUCCESS: 
            return Object.assign({}, state, {
                state: gameStates.GAMESTATE_CATCH_SUCCESS,
                lastCollectionSuccess: {
                    fursuitBadgeId: action.dto.FursuitBadgeId,
                    fursuitCollectionCount: action.dto.FursuitCollectionCount,
                    name: action.dto.Name,
                    species: action.dto.Species,
                    gender: action.dto.Gender
                }
            });                

        case actionTypes.GAME_COLLECT_TOKEN_FAIL: 
            return Object.assign({}, state, {
                state: gameStates.GAMESTATE_CATCH_FAIL,
                lastCollectionError: {
                    code: action.error.Code,
                    message: action.error.Message,
                }
            });                   

        default:
            return state;
    }
}