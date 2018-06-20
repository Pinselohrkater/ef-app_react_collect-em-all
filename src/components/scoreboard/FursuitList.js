import React, { Component } from 'react';

import Grow from '@material-ui/core/Grow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getApiUrl } from './../../consts/apiUrl';
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
        maxWidth: '100%',
        maxHeight: '150px'
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


class FursuitList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCellHeader} style={{ width: '5%' }}>Rank</TableCell>
                            <TableCell className={classes.tableCellHeader} style={{ width: '30%' }}></TableCell>
                            <TableCell className={classes.tableCellHeader} style={{ width: '45%' }}>Suit</TableCell>
                            <TableCell className={classes.tableCellHeader} style={{ width: '20%' }} numeric>Caught</TableCell>
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
                                        <img
                                            alt="Fursuit Badge"
                                            className={classes.image}
                                            src={getApiUrl() + "Fursuits/Badges/" + item.BadgeId + "/Image"}
                                        />

                                    </TableCell>
                                    <TableCell className={classes.tableCell}>
                                        {item.Name}<br />
                                        <span className={classes.small}>
                                            {item.Gender}<br />
                                            {item.Species}<br />
                                        </span>

                                    </TableCell>
                                    <TableCell className={`${classes.tableCell} ${classes.center}`}>
                                        <div className={classes.big}>{item.CollectionCount}</div>
                                        <div className={classes.small}>times</div>

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

export default withStyles(styles)(FursuitList);