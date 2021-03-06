import React, { Component } from 'react';

import Grow from '@material-ui/core/Grow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tableCellHeader: {
        padding: theme.spacing.unit * 1,

    },
    tableCell: {
        padding: theme.spacing.unit * 1,
        ...theme.typography.body1,
    },
    image: {
        width: '100%'
    },
    center: {

        textAlign: 'center'
    },
    big: {
        ...theme.typography.title,
    },
    small: {
        ...theme.typography.caption,
    }

});


class PlayerList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCellHeader} style={{ width: '5%' }}>Rank</TableCell>
                            <TableCell className={classes.tableCellHeader} style={{ width: '75%' }}>Player</TableCell>
                            <TableCell className={classes.tableCellHeader} style={{ width: '20%' }} numeric>Catches</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.items.map((item, key) => (
                            <Grow key={key} in={true} timeout={{ enter: key * 300 }}>
                                <TableRow key={key}>
                                    <TableCell className={classes.tableCell}>
                                        <div className={classes.big}>{item.Rank}</div>
                                    </TableCell>
                                    <TableCell className={classes.tableCell}>
                                        {item.Name}
                                    </TableCell>
                                    <TableCell className={`${classes.tableCell} ${classes.center}`}>
                                        <div className={classes.big}>{item.CollectionCount}</div>
                                    </TableCell>
                                </TableRow>
                            </Grow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(styles)(PlayerList);