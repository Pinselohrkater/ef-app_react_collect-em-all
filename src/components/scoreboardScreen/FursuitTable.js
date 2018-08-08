import React, { Component } from 'react';

import Fade from '@material-ui/core/Fade';
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
    landscape_badgeWrapper: {
        width: '15vw',
    },
    portrait_badgeWrapper: {
        height: '18vh',
        width: '20vw',
    },
    badge: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    landscape_badge: {
        width: '21vh',
        height: '26vh',
        margin: '1vh',
    },

    portrait_badge: {
        width: '21vw',
        height: '26vw',
        margin: '1vw',
    },

    portraitWrapper: {
        position: 'relative',
        backgroundColor: theme.palette.primary.main
    },
    landscape_portraitWrapper: {
        height: '21vh',
    },
    portrait_portraitWrapper: {
        height: '21vw',
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
        position: 'absolute',
        textAlign: 'center',
        verticalAlign: 'middle',
        left: 0,
        fontWeight: 'bold'
    },
    landscape_rank: {
        width: '5.3vh',
        height: '5.3vh',
        lineHeight: '5vh',
        fontSize: '2.5vh',
    },
    portrait_rank: {
        width: '5.3vw',
        height: '5.3vw',
        lineHeight: '5vw',
        fontSize: '2.5vw',
    },
    catches: {
        display: 'block',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    landscape_catches: {
        top: '5.3vh',
        width: '5.3vh',
    },
    portrait_catches: {
        top: '5.3vw',
        width: '5.3vw',
    },
    catchesText: {
        ...theme.typography.caption,
        color: theme.palette.getContrastText( theme.palette.primary.main ),
        opacity: 0.7,
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'absolute',
        transform: 'rotate(-90deg)',
        transformOrigin: '0 0'
    },
    landscape_catchesText: {
        lineHeight: '2vh',
        fontSize: '2.0vh',
        bottom: '-1vh',
        left: '1.7vh',
        width: '14vh',
    },
    portrait_catchesText: {
        lineHeight: '2vw',
        fontSize: '2.0vw',
        bottom: '-1vw',
        left: '1.7vw',
        width: '14vw',
    },
    namePlate: {
        display: 'table',
        width: '100%',
    },
    landscape_namePlate: {
        height: '5vh',
    },
    portrait_namePlate: {
        height: '5vw',
    },
    nameCell: {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    name: {
        ...theme.typography.body1,
        textAlign: 'center',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    landscape_name: {
        maxHeight: '5vh',
        fontSize: '2.0vh',
        lineHeight: '2.5vh'
    },
    portrait_name: {
        maxHeight: '5vw',
        fontSize: '2.0vw',
        lineHeight: '2.5vw'
    }
});

class FursuitTable extends Component {
    render() {
        const { classes } = this.props;
        const OptionalAnimation = this.props.optionalAnimation;

        const classPrefix = this.props.portrait ? "portrait" : "landscape";
        const prefix = (classes, className) => `${classes[className]} ${classes[classPrefix+'_'+className]}`;

        return (
            <div className={prefix(classes, 'badgeContainer')}>
                {this.props.fursuits.slice(0, this.props.portrait ? 20 : 18).map((item, key) => (
                    <OptionalAnimation animation={<Fade key={key} in={(this.props.stageProgress - (key / 2) > 0)} />}>
                        <div className={prefix(classes, 'badgeWrapper')}>
                            <Paper className={prefix(classes, 'badge')}>
                                <div className={prefix(classes, 'portraitWrapper')}>

                                    <div className={prefix(classes, 'rank')}>
                                        {item.Rank}
                                    </div>
                                    <div className={prefix(classes, 'catches')}>
                                        <div className={prefix(classes, 'catchesText')}>
                                            <b>{item.CollectionCount}</b> catches
                                    </div>
                                    </div>
                                    <img
                                        alt="Fursuit Badge"
                                        className={prefix(classes, 'image')}
                                        src={getApiUrl() + "Fursuits/Badges/" + item.BadgeId + "/Image"}
                                    />

                                </div>
                                <div className={prefix(classes, 'namePlate')}>
                                    <div className={prefix(classes, 'nameCell')}>
                                        <div className={prefix(classes, 'name')}>
                                            {item.Name}
                                        </div>
                                    </div>
                                </div>

                            </Paper>
                        </div>
                    </OptionalAnimation>
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(FursuitTable);