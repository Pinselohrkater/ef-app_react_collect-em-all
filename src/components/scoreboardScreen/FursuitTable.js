import React, { Component } from 'react';

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import { getApiUrl } from './../../consts/apiUrl';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tableCellHeader: {
        padding: '1.8vh',
        fontSize: '2.5vh'
    },
    tableRow: {
        height: 'auto',
    },
    tableCell: {
        padding: '1.8vh',
        ...theme.typography.body1,
        fontSize: '2.5vh'
    },

    center: {

        textAlign: 'center'
    },
    big: {
        ...theme.typography.body1,
        fontSize: '2.5vh',
        fontWeight: 'bold'
    },
    small: {
        ...theme.typography.caption,
    },

    badgeContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    badgeWrapper: {
        width: '15vw',
    },

    badge: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '21vh',
        height: '26vh',
        margin: '1vh',
        display: 'block',
    },

    portraitWrapper: {
        height: '21vh',
        position: 'relative',
        backgroundColor: theme.palette.primary.main
    },
    image: {
        position: 'absolute',
        right: '0',
        maxHeight: '100%',
        maxWidth: '100%',
    },
    rank: {
        ...theme.typography.body1,
        color: theme.palette.getContrastText( theme.palette.primary.main ),
        display: 'block',
        width: '5.3vh',
        height: '5.3vh',
        position: 'absolute',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '5vh',
        left: 0,
        fontSize: '2.5vh',
        fontWeight: 'bold'
    },
    catches: {
        display: 'block',
        top: '5.3vh',
        bottom: 0,
        left: 0,
        width: '5.3vh',
        position: 'absolute',
    },
    catchesText: {
        ...theme.typography.caption,
        color: theme.palette.getContrastText( theme.palette.primary.main ),
        opacity: 0.7,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '2vh',
        fontSize: '2.0vh',
        position: 'absolute',
        bottom: '-1vh',
        left: '1.7vh',
        width: '14vh',
        transform: 'rotate(-90deg)',
        transformOrigin: '0 0'
    },
    namePlate: {
        height: '5vh',
        display: 'table',
        width: '100%',
    },
    nameCell: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    name: {
        ...theme.typography.body1,
        maxHeight: '5vh',
        textAlign: 'center',
        fontSize: '2.0vh',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        lineHeight: '2.5vh'
    }

});

class FursuitTable extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.badgeContainer}>
                {this.props.fursuits.slice(0,18).map((item, key) => (
                    <Grow key={key} in={(this.props.stageProgress - (key / 2) > 0)}>
                        <div className={classes.badgeWrapper}>
                            <Paper className={classes.badge}>
                                <div className={classes.portraitWrapper}>

                                    <div className={classes.rank}>
                                        {item.Rank}
                                    </div>
                                    <div className={classes.catches}>
                                        <div className={classes.catchesText}>
                                            <b>{item.CollectionCount}</b> catches
                                    </div>
                                    </div>
                                    <img
                                        alt="Fursuit Badge"
                                        className={classes.image}
                                        src={getApiUrl() + "Fursuits/Badges/" + item.BadgeId + "/Image"}
                                    />

                                </div>
                                <div className={classes.namePlate}>
                                    <div className={classes.nameCell}>
                                        <div className={classes.name}>
                                            {item.Name}
                                        </div>
                                    </div>
                                </div>

                            </Paper>
                        </div>
                    </Grow>
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(FursuitTable);