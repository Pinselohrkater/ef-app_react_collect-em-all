import * as scoreboardActions from '../../actions/scoreboardActions';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import FursuitList from './FursuitList';
import Grow from '@material-ui/core/Grow';
import LoadingIndicator from '../shared/LoadingIndicator';
import PlayerList from './PlayerList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

function mapStateToProps(state) {
    return {
        scoreboard: state.scoreboard
    };
}

function mapDispatchToProps(dispatch) {
    return {
        scoreboardActions: bindActionCreators(scoreboardActions, dispatch)
    };
}



const styles = theme => ({
    heading: {
        ...theme.typography.title,
    },
    subheading: {
        ...theme.typography.subheading,
        color: theme.palette.primary.light,
        marginTop: theme.spacing.unit * 3,
        fontWeight: theme.typography.fontWeightMedium
    }
});



class ScoreboardPage extends Component {

    constructor(props) {
        super(props);
        props.scoreboardActions.updateScoreboard();
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                {this.props.scoreboard.isBusy ? <LoadingIndicator /> : <div>

                    <div className={classes.heading}>Leaderboard</div>

<Grow in={true}>
<div>
                    <div className={classes.subheading}>Players</div>
                    <PlayerList items={this.props.scoreboard.playerParticipations} />
                    </div>

</Grow>
<Grow in={true}>
<div>
<div className={classes.subheading}>Fursuits</div>
                    <FursuitList items={this.props.scoreboard.fursuitParticipations} />
    
    </div></Grow>

                    <Button
                                fullWidth
                                variant="contained"
                                onClick={() => this.props.history.replace('/')}
                                >Back</Button>
                </div> }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ScoreboardPage));