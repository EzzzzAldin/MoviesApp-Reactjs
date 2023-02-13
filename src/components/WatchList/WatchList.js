import { useMoviesContext } from "../../store/GlobalContext";

import Container from "../UI/Container";
import classes from "./WatchList.module.css";
import ListMovies from "./ListMovies";

const WatchList = () => {
  const MovieContext = useMoviesContext();

  let moviesList = MovieContext.watchList.map((movie) => (
    <ListMovies
      key={movie.id}
      movie={movie}
      poster={movie.poster}
      type="watchlist"
    />
  ));

  return (
    <Container className="section-layout watch-list">
      <div className={classes["main-info"]}>
        <h1>My WatchList</h1>
        <span className={classes["movies-count"]}>
          {`${MovieContext.watchList.length} movies`}
        </span>
      </div>
      <div className={classes.movies}>
        {MovieContext.watchList.length > 0 && moviesList}
      </div>
      {MovieContext.watchList.length === 0 && (
        <h2>No Movies in your List, add some!</h2>
      )}
    </Container>
  );
};

export default WatchList;
