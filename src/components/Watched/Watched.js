import { useMoviesContext } from "../../store/GlobalContext";

import classes from "./Watched.module.css";
import Container from "../UI/Container";
import ListMovies from "./ListMovies";

const Watched = () => {
  const MovieContext = useMoviesContext();

  let moviesList = MovieContext.watched.map((movie) => (
    <ListMovies
      key={movie.id}
      movie={movie}
      poster={movie.poster}
      type="watched"
    />
  ));

  return (
    <Container className="section-layout watch-list">
      <div className={classes["main-info"]}>
        <h1>My Watched</h1>
        <span className={classes["movies-count"]}>
          {`${MovieContext.watched.length} movies`}
        </span>
      </div>
      <div className={classes.movies}>
        {MovieContext.watched.length > 0 && moviesList}
      </div>
      {MovieContext.watched.length === 0 && (
        <h2>No Movies in your List, add some!</h2>
      )}
    </Container>
  );
};

export default Watched;
