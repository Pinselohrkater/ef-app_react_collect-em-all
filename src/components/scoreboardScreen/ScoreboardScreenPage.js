import * as scoreboardActions from '../../actions/scoreboardActions';
import * as uiActions from '../../actions/uiActions';

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import FursuitTable from './FursuitTable';
import Grow from '@material-ui/core/Grow';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoadingIndicator from '../shared/LoadingIndicator';
import Paper from '@material-ui/core/Paper';
import PlayerTable from './PlayerTable';
import Slide from '@material-ui/core/Slide';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// import FursuitList from './FursuitList';


// import PlayerList from './PlayerList';




function mapStateToProps(state) {
    return {
        scoreboard: state.scoreboard
    };
}

function mapDispatchToProps(dispatch) {
    return {
        scoreboardActions: bindActionCreators(scoreboardActions, dispatch),
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}


const styles = theme => ({
    layout: {
        // backgroundColor: '#C0C0FF',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        overflow: 'hidden',
        // backgroundImage: 'url("https://www.eurofurence.org/EF24/design/teaser.jpg")',
        // backgroundPosition: 'left center',
        // backgroundSize: 'cover',
        // backroundAttachment: 'fixed'
    },
    paper: {
    },
    titleLeft: {
        position: 'absolute',
        left: '5vw',
        width: '42.5vw',
        top: '3vh',
        height: '5vh',
        ...theme.typography.title,
        fontSize: '4vh',
        fontWeight: '100',
    },
    titleRight: {
        position: 'absolute',
        textAlign: 'right',
        right: '5vw',
        width: '42.5vw',
        top: '3vh',
        height: '5vh',
        ...theme.typography.title,
        fontWeight: '100',
        fontSize: '3vh',
        lineHeight: '2.5vh'
    },
    subTitle: {
        fontSize: '0.6em'
    },
    columnLeft: {
        position: 'absolute',
        left: '5vw',
        width: '42.5vw',
        top: '10vh',
        bottom: '2vh',
    },
    columnRight: {
        position: 'absolute',
        left: '52.5vw',
        width: '42.5vw',
        top: '10vh',
        bottom: '2vh',
    },
    columnWide: {
        position: 'absolute',
        left: '5vw',
        right: '5vw',
        top: '10vh',
        bottom: '2vh',
    },
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



class ScoreboardScreenPage extends Component {


    state = {
        stageProgress: 30,
        stage: 0
    }

    constructor(props) {
        super(props);
        props.scoreboardActions.updateScoreboard();
        props.uiActions.setBorderless(true);
        props.uiActions.setLightTheme();
    }


    componentWillMount() {
        let mockPlayerList = [];
        for (var i = 0; i < 80; i++) {
            mockPlayerList.push({
                Rank: i + 1,
                Name: "Player " + (i + 1),
                CollectionCount: (41 - i) * 3
            });
        }

        let mockFursuitList = [];
        for (var i = 0; i < 80; i++) {
            mockFursuitList.push({
                Rank: i + 1,
                Name: "Fursuit " + (i + 1),
                Gender: "Male",
                Species: "Foo",
                CollectionCount: (41 - i) * 3,
                BadgeId: "0ec8f09d-352b-49c1-b3fe-3cd8ba3d4ad3"
            });
        }

        this.setState({ mockPlayerList, mockFursuitList });
    }

    componentDidMount() {
        this.schedule();
    }

    schedule = () => {
        setTimeout(() => { this.tick(); this.schedule(); }, 50);
    }

    tick = () => {
        if (this.props.scoreboard.isBusy) return;

        let state = Object.assign({}, this.state);
        state.stageProgress++;
        if (state.stageProgress > 200) {
            state.stageProgress = 0;
            state.stage++;
        }
        if (state.stage > 1) {
            state.stage = 0;
            this.props.scoreboardActions.updateScoreboard();
        }
        this.setState(state);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.layout}>

                {/* <div className={classes.heading}>Leaderboard</div>

                    {JSON.stringify(this.state)}

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => this.props.scoreboardActions.updateScoreboard()}
                    >Back</Button> */}

                <div className={classes.titleRight}>
                    Collect'em All! - Leaderboard<br />
                    <div className={classes.subTitle}>Join the game! - <b>Go to app.eurofurence.org</b></div>
                </div>

                {this.state.stage === 0 ? <div>

                    <Slide in={this.state.stageProgress > 5 && this.state.stageProgress < 195} direction={'right'}>
                        <div className={classes.titleLeft}>
                            Top Players
                            </div>
                    </Slide>


                    <div className={classes.columnLeft}>
                        <Slide in={this.state.stageProgress > 5 && this.state.stageProgress < 195} direction={'right'}>
                            <Paper elevation={10} className={classes.paper}>
                                <PlayerTable players={this.props.scoreboard.playerParticipations.slice(0, 10)}
                                    stageProgress={this.state.stageProgress - 10}
                                />
                            </Paper>
                        </Slide>
                    </div>
                    {this.props.scoreboard.playerParticipations.length > 10 ? <div>

                        <div className={classes.columnRight}>
                            <Slide in={this.state.stageProgress > 5 && this.state.stageProgress < 195} direction={'left'}>
                                <Paper elevation={10} className={classes.paper}>
                                    <PlayerTable players={this.props.scoreboard.playerParticipations.slice(10, 20)}
                                        stageProgress={this.state.stageProgress - 18}
                                    />
                                </Paper>
                            </Slide>
                        </div>
                    </div> : null}

                </div> : null}

                {this.state.stage === 1 ? <div>


                    <Slide in={this.state.stageProgress > 5 && this.state.stageProgress < 195} direction={'right'}>
                        <div className={classes.titleLeft}>
                            Top Creatures
                            </div>
                    </Slide>

                    <Grow in={this.state.stageProgress > 5 && this.state.stageProgress < 195}>
                        <div className={classes.columnWide}>
                            <FursuitTable fursuits={this.props.scoreboard.fursuitParticipations}
                                stageProgress={this.state.stageProgress - 10}
                            />
                        </div>
                    </Grow>

                </div> : null}


                <Grow in={this.state.stageProgress > 5 && this.state.stageProgress < 195}>
                    {this.state.stageProgress === 0 ? <div /> :
                        <LinearProgress variant="determinate" value={(110 / 190) * (this.state.stageProgress - 10)} />
                    }
                </Grow>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ScoreboardScreenPage));