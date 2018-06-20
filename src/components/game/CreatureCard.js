import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import { getApiUrl } from './../../consts/apiUrl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paperBase: {
        padding: theme.spacing.unit,
        background: theme.palette.background.paper
    },
    image: {
        maxWidth: '100%',
        maxHeight: '150px'
    },
    label: {
        ...theme.typography.caption,
        color: theme.palette.getContrastText( theme.palette.background.paper ),
        padding: theme.spacing.unit * 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        fontWeight: 'bold',
        
    }
});

class CreatureCard extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.paperBase}>
                            <img 
                            alt="Fursuit Badge"
                            className={classes.image}
                            src={getApiUrl() + "Fursuits/Badges/" + this.props.fursuitBadgeId + "/Image"}
                            />

                            <div className={classes.label}>
                            {this.props.name}
                            </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(CreatureCard);