import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Result from "./Result";
import Table from "./Table";
import League from "./League";
import Player from "./Player";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/league" element={<League />} />
        <Route path="/table" element={<Table />} />
        <Route path="/player" element={<Player />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
