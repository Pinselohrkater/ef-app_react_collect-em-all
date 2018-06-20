import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import { getApiUrl } from './../../consts/apiUrl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        textAlign: 'center',
    },
    subheading: {
        ...theme.typography.title,
        color: theme.palette.primary.light,
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing.unit * 2,
    },
    body: {
        ...theme.typography.body1,
    },
    layout: {
        padding: theme.spacing.unit * 4,
        overflow: "hidden"
    },
    badgePaper: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
    },
    badgeName: {
        ...theme.typography.title,
        padding: theme.spacing.unit * 1,
    },
    badgeText: {
        ...theme.typography.body2,
    },
    backButton: {
        marginTop: theme.spacing.unit * 2,
    },
    image: {
        maxHeight: '30vh'
    }
});


class CatchSuccess extends Component {

    raiseDismiss = () => {
        if (this.props.onDismiss != null) this.props.onDismiss();
    }

    render() {
        let response = this.props.collectTokenResponse;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grow in={true}>
                    <div className={classes.subheading}>
                        Congratulations!
                    </div>
                </Grow>
                <Grow in={true} timeout={{ enter: 300 }}>
                    <div className={classes.body}>
                        You caught:
                    </div>
                </Grow>

                <Grow in={true} timeout={{ enter: 600 }}>
                    <Paper className={classes.badgePaper}>
                        {/* You caught {response.name}, a {response.gender} {response.species}! They've been caught {response.fursuitCollectionCount} in total. */}

                        <img
                            alt="Fursuit Badge"
                            className={classes.image}
                            src={getApiUrl() + "Fursuits/Badges/" + response.fursuitBadgeId + "/Image"}
                        />
                        <div className={classes.badgeName}>{response.name}</div>
                        <div className={classes.badgeText}>
                            {response.species}
                            {response.gender !== "" ? <span> ({response.gender})</span> : null}
                        </div>

                    </Paper>
                </Grow>

                <Grow in={true} timeout={{ enter: 900 }}>
                    <div className={classes.body}>
                        {response.name} has been caught <b>{response.fursuitCollectionCount}</b> times so far.
                </div>
                </Grow>


                <Grow in={true} timeout={{ enter: 1150 }}>
                    <Button className={classes.backButton}
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={() => this.raiseDismiss()}>Back</Button>
                </Grow>

            </div>
        );
    }
}

export default withStyles(styles)(CatchSuccess);