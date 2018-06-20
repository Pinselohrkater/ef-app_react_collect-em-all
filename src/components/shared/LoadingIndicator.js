import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grow from '@material-ui/core/Grow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    spinner: {
        textAlign: 'center',
        padding: theme.spacing.unit * 5,
    },
    loadingLabel: {
        ...theme.typography.caption,
        padding: theme.spacing.unit * 5,
    }
});

class LoadingIndicator extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grow in={true} timeout={{ enter: 300 }}>
                <div className={classes.spinner}>
                    <CircularProgress size={100} />
                    <div className={classes.loadingLabel}>Loading...</div>
                </div>
            </Grow>
        );
    }
}

export default withStyles(styles)(LoadingIndicator);