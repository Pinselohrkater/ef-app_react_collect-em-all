import * as types from './actionTypes';

export function setDarkTheme() {
    return { type: types.UI_SET_DARK_THEME }
}

export function setLightTheme() {
    return { type: types.UI_SET_LIGHT_THEME }
}

export function setBorderless(value) {
    return { type: types.UI_SET_BORDERLESS, value }
}