import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/layout/Header";
import WatchList from "./pages/WatchList";
import Watched from "./pages/Watched";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/watch-list" />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
