import {combineReducers} from 'redux';
import game from './gameReducer';
import login from './loginReducer';
import scoreboard from './scoreboardReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
    login,
    game,
    scoreboard,
    ui
});

export default rootReducer;