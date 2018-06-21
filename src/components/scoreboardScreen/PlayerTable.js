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
        padding: '1.8vh',
        fontSize: '2.5vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText( theme.palette.primary.main ),        
    },
    tableRow: {
        height: 'auto',
    },
    tableCell: {
        padding: '1.8vh',
        ...theme.typography.body1,
        fontSize: '2.5vh'
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
        fontSize: '2.5vh',
        fontWeight: 'bold'
    },
    small: {
        ...theme.typography.caption,
    }

});

class PlayerTable extends Component {
    render() {
        const { classes } = this.props;
        const OptionalAnimation = this.props.optionalAnimation;
        
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={`${classes.tableCellHeader} ${classes.center}`} style={{ width: '5%' }}>Rank</TableCell>
                            <TableCell className={classes.tableCellHeader} style={{ width: '75%' }}>Player</TableCell>
                            <TableCell className={`${classes.tableCellHeader} ${classes.center}`} style={{ width: '20%' }} numeric>Catches</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.players.map((item, key) => (
                            <OptionalAnimation animation={<Fade key={key} in={(this.props.stageProgress) > 0} timeout={{enter: key * 200}} />}>
                                <TableRow key={key} className={classes.tableRow}>
                                    <TableCell className={`${classes.tableCell} ${classes.center} ${classes.primary}`}>
                                        <div className={classes.big}>{item.Rank}</div>
                                    </TableCell>
                                    <TableCell className={classes.tableCell}>
                                        {item.Name}
                                    </TableCell>
                                    <TableCell className={`${classes.tableCell} ${classes.center}`}>
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