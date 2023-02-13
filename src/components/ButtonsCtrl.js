import classes from "./ButtonsCtrl.module.css";
import { useMoviesContext } from "../store/GlobalContext";

const ButtonsCtrl = (props) => {
  const MovieContext = useMoviesContext();

  const addMovieToWatchedHandler = () => {
    MovieContext.MoviesDispatch({
      type: "ADD_MOVIE_TO_WATCHED",
      payload: props.movie,
    });
  };

  const removeMovieFromWatchlistHandler = () => {
    MovieContext.MoviesDispatch({
      type: "REMOVE_MOVIE_FROM_WATCHLIST",
      payload: props.movie.id,
    });
  };

  const moveMovieFromWatchedHandler = () => {
    MovieContext.MoviesDispatch({
      type: "MOVE_FROM_WATCHLIST",
      payload: props.movie,
    });
  };

  const removeMovieFromWatchedHandler = () => {
    MovieContext.MoviesDispatch({
      type: "REMOVE_MOVIE_FROM_WATCHED",
      payload: props.movie.id,
    });
  };

  return (
    <div>
      {props.type === "watchlist" && (
        <div className={classes.btns}>
          <button
            className={classes["ctrl-btn"]}
            onClick={addMovieToWatchedHandler}
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            className={classes["ctrl-btn"]}
            onClick={removeMovieFromWatchlistHandler}
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </div>
      )}
      {props.type === "watched" && (
        <div className={classes.btns}>
          <button
            className={classes["ctrl-btn"]}
            onClick={moveMovieFromWatchedHandler}
          >
            <i className="fa-solid fa-eye-slash" />
          </button>
          <button
            className={classes["ctrl-btn"]}
            onClick={removeMovieFromWatchedHandler}
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonsCtrl;
