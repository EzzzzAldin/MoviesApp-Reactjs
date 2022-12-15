import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <div className={classes["data-movie"]}>
      <div className={classes.image}>
        <img src={props.poster} alt={props.title} />
      </div>
      <div className={classes["info-movie"]}>
        <h3>{props.title}</h3>
        <h5>{props.year}</h5>
        <div className={classes["btn-group"]}>
          <button>ADD TO WATCHLIST</button>
          <button>ADD TO WATCHED</button>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
