import classes from "./MoviesList.module.css";

import { useMoviesContext } from "../../store/GlobalContext";

const MoviesList = (props) => {
  const MovieContext = useMoviesContext();

  const addToWatchlistHandler = () => {
    MovieContext.MoviesDispatch({
      type: "ADD_MOVIE_TO_WATCHLIST",
      payload: props,
    });
  };

  const addToWatchedHandler = () => {
    MovieContext.MoviesDispatch({
      type: "ADD_MOVIE_TO_WATCHED",
      payload: props,
    });
  };

  const storedMovie = MovieContext.watchList.find((f) => f.id === props.id);
  const storedMovieWatched = MovieContext.watched.find(
    (f) => f.id === props.id
  );

  const disabledWatchList = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const disabledWatched = storedMovieWatched ? true : false;

  return (
    <div className={classes["data-movie"]}>
      <div className={classes.image}>
        <img src={props.poster} alt={props.title} />
      </div>
      <div className={classes["info-movie"]}>
        <h3>{props.title}</h3>
        <h5>{props.year}</h5>
        <div className={classes["btn-group"]}>
          <button onClick={addToWatchlistHandler} disabled={disabledWatchList}>
            ADD TO WATCHLIST
          </button>
          <button onClick={addToWatchedHandler} disabled={disabledWatched}>
            ADD TO WATCHED
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
