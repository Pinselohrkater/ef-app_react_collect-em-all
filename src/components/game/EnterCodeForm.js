import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import CreatureCard from './CreatureCard';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { getApiUrl } from './../../consts/apiUrl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heading: {
        ...theme.typography.title,
    },
    subheading: {
        ...theme.typography.subheading,
        color: theme.palette.primary.light,
        marginTop: theme.spacing.unit * 3,
        fontWeight: theme.typography.fontWeightMedium
    },
    body: {
        ...theme.typography.body1,
    },
    layout: {
        padding: theme.spacing.unit * 4,
        overflow: "hidden"
    },
    lastCollectionTitle: {
        ...theme.typography.caption,
        textAlign: 'center',
        marginBottom: theme.spacing.unit
    },
    lastCollections: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    creatureCard: {
        // maxWidth: '30%',
        marginBottom: '10px'
    }
});


class EnterCodeForm extends Component {

    state = {
        token: ""
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = () => {
        if (this.props.onSubmit != null)
            this.props.onSubmit(this.state.token);
    }

    render() {

        let pp = this.props.playerParticipation;
        const { classes } = this.props;

        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grow in={true}>
                        <Grid container alignItems="center" spacing={16}>
                            <Grid item xs={12}>
                                <div className={classes.heading}>
                                    Hi {pp.name}!
                            </div>


                                <div className={classes.subheading}>
                                    Your Statistics
                            </div>
                                <div className={classes.body}>
                                    You caught <b>{pp.collectionCount}</b> creatures so far, and are currently on rank <b>{pp.scoreboardRank}</b> on the leaderboard.
                            </div>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={() => this.props.history.push('scoreboard')}
                                >View Leaderboard</Button>

                            </Grid>

                        </Grid>
                    </Grow>
                    <Grow in={true} timeout={{ enter:200 }}>
                        <Grid container alignItems="center" spacing={16}>
                            <Grid item xs={12}>
                                <div className={classes.subheading}>
                                    Catch
                            </div>
                                <Typography variant="body1">
                                    Discovered a new creature you'd like to add to your collection? Type their code (found on the sticker on the Fursuit Badge) here:
                            </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    id="token"
                                    label="Token"
                                    fullWidth
                                    value={this.state.token}
                                    helperText="6-digit code on Fursuit Badge"
                                    onChange={this.handleChange('token')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => this.handleSubmit()}
                                >Collect</Button>
                            </Grid>
                        </Grid>
                    </Grow>
                </Grid>


                <Grow in={true} timeout={{ enter: 400 }}>
                    <Grid item xs={12}>
                        <div className={classes.subheading}>
                            Your recent catches
                        </div>
                    </Grid>
                </Grow>


                <Grow in={true} timeout={{ enter: 600 }}>
                    <Grid item xs={12}>
                        {pp.recentlyCollected == null || !Array.isArray(pp.recentlyCollected) || pp.recentlyCollected.length === 0 ?
                            <Typography variant="body1">
                                You have not collected any creatures so far!
                    </Typography>
                            :
                            <div>
                                <div className={classes.lastCollections}>

                                    {pp.recentlyCollected.map((item, key) => (
                                        <Grow in={true} timeout={{ enter: 600 + (key * 150) }} key={key}>
                                            <div className={classes.creatureCard} key={key}>
                                                <CreatureCard
                                                    key={key}

                                                    fursuitBadgeId={item.Id}
                                                    name={item.Name} />
                                            </div>
                                        </Grow>
                                    ))}

                                </div>
                            </div>
                        }




                    </Grid>
                </Grow>
            </Grid>
        );
    }
}

export default withStyles(styles)(EnterCodeForm);