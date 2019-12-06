import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import store from "../store";

import { CircularProgress } from "@material-ui/core";
import Movie from "./Movie";

import { TextField, Button } from "@material-ui/core";

const action = (type, payload) => store.dispatch({ type, payload });

function Searchbox({ loading, movies, errorMessage }) {
  const [searchValue, setSearchValue] = useState("");
  const search = value => {
    action("SEARCH_MOVIES_REQUEST", value);
  };

  useEffect(() => {
    action("SEARCH_MOVIES_REQUEST", "guardians");
  }, []);

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <div>
      <form className="search" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Enter Movie Name"
          variant="outlined"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <Button
          onClick={callSearchFunction}
          color="primary"
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </form>

      <div className="movies">
        {loading && !errorMessage ? (
          <span className="throbber">
            <CircularProgress />
          </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies &&
          movies.map((movie, index) => (
            <Movie key={`${index} - ${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { loading, movies, errorMessage } = state.results || {};
  return { loading, movies, errorMessage };
};

export default connect(mapStateToProps)(Searchbox);
