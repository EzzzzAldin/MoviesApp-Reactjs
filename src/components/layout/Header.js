import { NavLink } from "react-router-dom";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Header.module.css";
import Container from "../UI/Container";
import imageUser from "../../shared/assets/images/user-01.svg";

const Header = () => {
  return (
    <section className={classes["header-section"]}>
      <Container className={classes["header-content"]}>
        <div className={classes.content}>
          <div>
            <NavLink className={classes.logo} to="/watch-list">
              Movies
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/watch-list"
              >
                Watch List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/watched"
              >
                Watched
              </NavLink>
            </li>
            <li>
              <NavLink className={classes.add} to="/add-movie">
                Add Movie
              </NavLink>
            </li>
          </ul>
          <FontAwesomeIcon className={classes["list-mobile"]} icon={faList} />
        </div>
        <div className={classes["dummy-user"]}>
          <img src={imageUser} alt="user" />
          <span>Ezz</span>
        </div>
        <div></div>
      </Container>
    </section>
  );
};

export default Header;
