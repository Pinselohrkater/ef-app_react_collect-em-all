import * as loginActions from '../actions/loginActions';
import * as uiActions from '../actions/uiActions';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';

import Footer from './Footer';
import Menu from './Menu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: { main: '#005953' }
    },
});

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#005953' }
    },
});


const styles = theme => ({
    layout: {
        padding: theme.spacing.unit * 3,
        overflow: "hidden"
    }
});


function mapStateToProps(state) {
    return {
        ui: state.ui,
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch),

    };
}


class Root extends Component {


    componentWillMount() {
        this.updateStateAndBackground(this.props);
    }

    state = {
        theme: lightTheme
    }

    updateStateAndBackground(props)
    {
        let theme = (props.ui.theme === "dark") ? darkTheme : lightTheme;
        this.setState({ theme });
        document.body.style.backgroundColor = theme.palette.background.default;
        document.body.style.color = theme.palette.text.primary;
    }
    
    componentWillReceiveProps(nextProps) {
        this.updateStateAndBackground(nextProps);
    }
    

    render() {
        const { classes } = this.props;


        return (
            <MuiThemeProvider theme={this.state.theme}>
            <Menu 
                login={this.props.login}
                loginActions={this.props.loginActions}
                theme={this.props.ui.theme}
                setDarkTheme={() => this.props.uiActions.setDarkTheme()}
                setLightTheme={() => this.props.uiActions.setLightTheme()}
            />
            <div className={classes.layout}>
                {this.props.children}
            </div>
            <Footer />
            </MuiThemeProvider>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Root));