import * as loginActions from '../../actions/loginActions';
import * as uiActions from '../../actions/uiActions';

import React, { Component } from 'react';

import LoadingIndicator from '../shared/LoadingIndicator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActions, dispatch),
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}


class InitializeWithTokenPage extends Component {

    constructor(props) {
        super(props);
        this.props.uiActions.setAllowLogin(false);

        if (props.match.params.embedded === 'true') {
            this.props.uiActions.setEmbedded(true);
        }

        if (props.match.params.token === "empty") {
            props.history.replace("/login");
        } else {
            this.props.loginActions.verifyToken(props.match.params.token)
                .then(() => props.history.replace("/collect"));
        }
    }
    
    render() {
        return (
            <LoadingIndicator />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InitializeWithTokenPage);