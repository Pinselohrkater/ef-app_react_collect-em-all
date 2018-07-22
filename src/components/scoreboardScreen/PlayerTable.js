import React, { Component } from 'react';

import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tableCellHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText( theme.palette.primary.main ),        
    },
    landscape_tableCellHeader: {
        padding: '1.8vh',
        fontSize: '2.5vh',
    },
    portrait_tableCellHeader: {
        padding: '1.8vw',
        fontSize: '2.6vw',
    },    
    tableRow: {
        height: 'auto',
    },
    tableCell: {
        ...theme.typography.body1,
    },
    landscape_tableCell: {
        padding: '1.8vh',
        fontSize: '2.5vh'
    },    
    portrait_tableCell: {
        padding: '1.8vw',
        fontSize: '2.6vw'
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText( theme.palette.primary.light ),        
    },    
    image: {
        width: '100%'
    },
    center: {

        textAlign: 'center'
    },
    big: {
        fontWeight: 'bold'
    },
    landscape_big: {
        fontSize: '2.5vh',
    },
    portrait_big: {
        fontSize: '2.6vw',
    },    
    small: {
        ...theme.typography.caption,
    }

});

class PlayerTable extends Component {
    render() {
        const { classes } = this.props;
        const OptionalAnimation = this.props.optionalAnimation;

        const classPrefix = this.props.portrait ? "portrait" : "landscape";
        const prefix = (classes, className) => `${classes[className]} ${classes[classPrefix+'_'+className]}`;

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={`${prefix(classes, 'tableCellHeader')} ${classes.center}`} style={{ width: '5%' }}>Rank</TableCell>
                            <TableCell className={prefix(classes, 'tableCellHeader')} style={{ width: '75%' }}>Player</TableCell>
                            <TableCell className={`${prefix(classes, 'tableCellHeader')} ${classes.center}`} style={{ width: '20%' }} numeric>Catches</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.players.map((item, key) => (
                            <OptionalAnimation animation={<Fade key={key} in={(this.props.stageProgress) > 0} timeout={{enter: key * 200}} />}>
                                <TableRow key={key} className={classes.tableRow}>
                                    <TableCell className={`${prefix(classes, 'tableCell')} ${classes.center} ${classes.primary}`}>
                                        <div className={classes.big}>{item.Rank}</div>
                                    </TableCell>
                                    <TableCell className={prefix(classes, 'tableCell')}>
                                        {item.Name}
                                    </TableCell>
                                    <TableCell className={`${prefix(classes, 'tableCell')} ${classes.center}`}>
                                        {item.CollectionCount}
                                    </TableCell>
                                </TableRow>
                            </OptionalAnimation>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(PlayerTable);