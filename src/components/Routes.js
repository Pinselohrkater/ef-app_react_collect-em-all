import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import GamePage from './game/GamePage'
import InitializeWithTokenPage from './start/InitializeWithTokenPage'
import LoginPage from './login/LoginPage'
import ScoreboardPage from './scoreboard/ScoreboardPage'
import ScoreboardScreenPage from './scoreboardScreen/ScoreboardScreenPage'

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/token-:token' component={InitializeWithTokenPage} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/collect' component={GamePage} />
                    <Route exact path='/scoreboard' component={ScoreboardPage} />
                    <Route exact path='/scoreboardScreen' component={ScoreboardScreenPage} />
                    <Redirect from='*' to='/collect' />
                </Switch>
            </div>
        );
    }
}

export default Routes;