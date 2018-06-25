import * as loginActions from '../../actions/loginActions';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import LoadingIndicator from '../shared/LoadingIndicator';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heading: {
        ...theme.typography.title,
    },
    loginRequest: {
        ...theme.typography.subheading,
        color: theme.palette.primary.light,
        marginTop: theme.spacing.unit * 3,
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing.unit * 2
    },
    loginHelp: {
        ...theme.typography.caption,
        marginBottom: theme.spacing.unit * 3
    },
    formPaper: {
        padding: theme.spacing.unit * 2,
    },
    error: {
        ...theme.typography.body2,
        color: theme.palette.error.main
    }
});

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    };
}

class LoginPage extends Component {

    constructor(props) {
        super(props);
        props.loginActions.resetState();
        this.forwardToGameIfLoggedOn(props);
    }

    forwardToGameIfLoggedOn = (props) => {
        if (props.login.isLoggedOn) {
            props.history.replace("collect");
        }
    }

    state = {
        regNo: "",
        username: "",
        password: ""
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginActions
            .sendCredentials(Number(this.state.regNo), this.state.username, this.state.password)
            .then(() => this.forwardToGameIfLoggedOn(this.props));
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                {this.props.login.isBusy ? <LoadingIndicator /> : <div>

                    <Grow in={true}>
                        <div className={classes.heading}>
                            Login
                        </div>
                    </Grow>
                    <Grow in={true} timeout={{ enter: 300 }}>
                        <div className={classes.loginRequest}>
                            Please log in with your credentials for the Eurofurence Registration System.
                    </div>
                    </Grow>
                    <Grow in={true} timeout={{ enter: 450 }}>
                        <div className={classes.loginHelp}>
                            If you do not have access to them, come to our ConOps or Security office. They can help you with an alternative login. Please bring your badge and a valid legal form of identification.
                    </div>
                    </Grow>

                    <Grow in={true} timeout={{ enter: 600 }}>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <Paper className={classes.formPaper}>

                                <Grid container spacing={16}>
                                    {this.props.login.isFailed ? <Grid item className={classes.error}>
                                        Sorry - we couldn't log you in. Please check your credentials and try again.
                            </Grid> : null}

                                    <Grid item xs={12}>
                                        <TextField
                                            id="name"
                                            label="Nickname"
                                            value={this.state.username}
                                            onChange={this.handleChange('username')}
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="name"
                                            label="Registration Number"
                                            value={this.state.regNo}
                                            onChange={this.handleChange('regNo')}
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="name"
                                            label="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange('password')}
                                            fullWidth
                                            type="password"
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            fullWidth
                                            type="submit">Login</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </form>
                    </Grow>



                </div>}


            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));