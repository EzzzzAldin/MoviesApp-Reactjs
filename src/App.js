import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/layout/Header";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";
import AddMovie from "./pages/AddMovie";
import ContextProvider from "./store/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/watch-list" />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
