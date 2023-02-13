import classes from "./listMovies.module.css";
import ButtonsCtrl from "../ButtonsCtrl";

const ListMovies = (props) => {
  return (
    <>
      <div className={classes.movie}>
        <img src={props.poster} alt={""} />
        <ButtonsCtrl type={props.type} movie={props.movie} />
      </div>
    </>
  );
};

export default ListMovies;
