import * as actionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
    switch (action.type) {
        case actionTypes.UI_SET_DARK_THEME:
            return Object.assign({}, state, { theme: "dark" });
        case actionTypes.UI_SET_LIGHT_THEME:
            return Object.assign({}, state, { theme: "light" });
        case actionTypes.UI_SET_BORDERLESS:
            return Object.assign({}, state, { borderless: action.value });
        default:
            return state;
    }
}