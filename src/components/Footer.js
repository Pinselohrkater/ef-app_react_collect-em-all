import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    legal: {
        textAlign: "center",
        ...theme.typography.caption,
    }
});

const privacyStatementUrl = "https://help.eurofurence.org/legal/privacy";

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <List component="nav">
                    <ListItem button onClick={() => window.open(privacyStatementUrl, '_blank')}>
                        <ListItemText className={classes.legal}>
                            <span className={classes.legal}>Privacy Statement / Datenschutzerkl&auml;rung</span>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);