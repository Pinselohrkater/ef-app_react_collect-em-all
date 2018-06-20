import * as loginActions from '../../actions/loginActions';

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
        loginActions: bindActionCreators(loginActions, dispatch)
    };
}


class InitializeWithTokenPage extends Component {

    constructor(props) {
        super(props);
        this.props.loginActions.verifyToken(props.match.params.token)
            .then(() => props.history.replace("collect"));
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