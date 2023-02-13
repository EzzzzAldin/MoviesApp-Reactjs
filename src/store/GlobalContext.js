import { createContext, useReducer, useContext, useEffect } from "react";

// Initial State Of CreateContext Function
const initialState = {
  watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

const reducerFunction = (state, action) => {
  // Add Movie To WatchList
  if (action.type === "ADD_MOVIE_TO_WATCHLIST") {
    return {
      // ...state to save movies in watced array
      ...state,
      // action.payload => Movie Who Add To WatchList && ...state.watchList to save pervious movies
      watchList: [action.payload, ...state.watchList],
    };
  }
  // Remove Movie FROM WatchList
  if (action.type === "REMOVE_MOVIE_FROM_WATCHLIST") {
    return {
      ...state,
      watchList: state.watchList.filter(
        //   If movie not equal id return to obj if not remove from list
        (movie) => movie.id !== action.payload
      ),
    };
  }
  // Add Movie To Watched
  if (action.type === "ADD_MOVIE_TO_WATCHED") {
    return {
      ...state,
      watchList: state.watchList.filter(
        //   If movie not equal id return to obj if not remove from list
        (movie) => movie.id !== action.payload.id
      ),
      watched: [action.payload, ...state.watched],
    };
  }
  // Remove Movie To Watched
  if (action.type === "REMOVE_MOVIE_FROM_WATCHED") {
    return {
      ...state,
      watched: state.watched.filter(
        //   If movie not equal id return to obj if not remove from list
        (movie) => movie.id !== action.payload
      ),
    };
  }
  // Move To WatchList
  if (action.type === "MOVE_FROM_WATCHLIST") {
    return {
      ...state,
      watchList: [action.payload, ...state.watchList],
      watched: state.watched.filter((movie) => movie.id !== action.payload.id),
    };
  }

  return state;
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMoviesContext = () => {
  return useContext(GlobalContext);
};
