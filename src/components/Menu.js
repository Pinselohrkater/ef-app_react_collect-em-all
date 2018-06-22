import React, { Component } from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Brightness2 from '@material-ui/icons/Brightness2';
import Brightness5 from '@material-ui/icons/Brightness5';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    // fontWeight: theme.typography.fontWeightLight
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


class MenuBar extends Component {

  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.title}>
              Collect'em all!
             </Typography>
            <IconButton
              onClick={this.handleMenu}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >

              <MenuItem onClick={() => { if (this.props.theme === "dark") { this.props.setLightTheme(); } else { this.props.setDarkTheme(); } }}>
                <ListItemIcon>
                  {this.props.theme === "dark" ? <Brightness5 /> : <Brightness2 />}
                </ListItemIcon>
                <ListItemText>
                  {this.props.theme === "dark" ? <span>Use Light Theme</span> : <span>Use Dark Theme</span>}
                </ListItemText>
              </MenuItem>

              {this.props.login.isLoggedOn ?
                <MenuItem onClick={() => { this.props.loginActions.logout(); this.handleClose(); }}>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText>
                    Logout {this.props.login.username}
                </ListItemText>

                </MenuItem>
                : null
              }


            </Menu>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default withStyles(styles)(MenuBar);