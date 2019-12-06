import React, { Fragment } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Profile = () => {
  const { loading, user } = useAuth0();
  const classes = useStyles();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Paper className={classes.root}>
        <img src={user.picture} alt="Profile" />

        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </Paper>
    </Fragment>
  );
};

export default Profile;
