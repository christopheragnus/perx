import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import history from "../utils/history";

import NavBar from "./NavBar";
import { useAuth0 } from "../react-auth0-spa";

import { CircularProgress } from "@material-ui/core";
import Search from "./Searchbox";
import Header from "./Header";

import "./App.css";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div className="throbber">
        <CircularProgress />
        Loading auth...
      </div>
    );
  }

  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Header text="Chris' Movie Searcher" />
        <Switch>
          <Route path="/" exact component={Search} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
