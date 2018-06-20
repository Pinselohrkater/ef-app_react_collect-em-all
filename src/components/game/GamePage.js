import * as gameActions from '../../actions/gameActions';
import * as gameStates from '../../consts/gameStates';

import React, { Component } from 'react';

import CatchFail from './CatchFail';
import CatchSuccess from './CatchSuccess';
import EnterCodeForm from './EnterCodeForm';
import LoadingIndicator from '../shared/LoadingIndicator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        game: state.game,
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    };
}

class GamePage extends Component {



    constructor(props) {
        super(props);
        if (!this.ensureLoggedOn(props)) return;
        this.props.gameActions.askForToken();
    }

    componentWillReceiveProps(nextProps) {
        this.ensureLoggedOn(nextProps);
    }

    ensureLoggedOn(props) {
        if (props.login.isLoggedOn) return true;

        props.history.replace("login");
        return false;
    }

    render() {

        return (
            <div>

                {this.props.game.isBusy ? <LoadingIndicator /> : <div>

                    <div>


                        {this.props.game.state === gameStates.GAMESTATE_ENTER_CODE ?
                            <EnterCodeForm
                                key={1}
                                history={this.props.history}
                                playerParticipation={this.props.game.playerParticipation}
                                onSubmit={(token) => this.props.gameActions.collectToken(token)}
                            /> : null}

                        {this.props.game.state === gameStates.GAMESTATE_CATCH_SUCCESS ?
                            <CatchSuccess
                                key={2}
                                collectTokenResponse={this.props.game.lastCollectionSuccess}
                                onDismiss={() => this.props.gameActions.askForToken()}
                            /> : null}

                        {this.props.game.state === gameStates.GAMESTATE_CATCH_FAIL ?
                            <CatchFail
                                key={3}
                                errorMessage={this.props.game.lastCollectionError.message}
                                onDismiss={() => this.props.gameActions.askForToken()}
                            /> : null}

                    </div>





                </div>}

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamePage);