import { useState, useEffect } from "react";
import axios from "axios";

import classes from "./AddMovies.module.css";
import MoviesList from "./MoviesList";

const AddMovies = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredMovies, setEnteredMovies] = useState([]);

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${enteredInput}&apikey=8dd08453`
        );

        if (response.data.Search) {
          setEnteredMovies(response.data.Search);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [enteredInput]);

  let Movies = enteredMovies.map((movie) => (
    <MoviesList
      key={movie.imdbID}
      id={movie.imdbID}
      poster={movie.Poster}
      title={movie.Title}
      year={movie.Year}
    />
  ));

  return (
    <section className="centered section-layout">
      <input
        className={classes.input}
        type="text"
        placeholder="Search Movie"
        value={enteredInput}
        onChange={inputChangeHandler}
      />
      {Movies}
    </section>
  );
};

export default AddMovies;
