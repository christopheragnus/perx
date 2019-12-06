import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1" className={classes.title}>
            {!isAuthenticated && (
              <span>Please login to check your profile</span>
            )}
            {isAuthenticated && (
              <span>
                <Link className="menulink" to="/">
                  Home
                </Link>
                &nbsp;
                <Link className="menulink" to="/profile">
                  Profile
                </Link>
              </span>
            )}
          </Typography>
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})} color="inherit">
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Button color="inherit" onClick={() => logout()}>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
