import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import { Outlet, Link } from "react-router-dom";

function Result() {
  return (
    <div id="top">
      <div>
        <div id="header">
          <Link to="/"><img id="logo" src="/Logo.png" width="150px" alt="RTF_logo" /></Link>
          <h1>Result</h1>
        </div>
      </div>

      <div id="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/result">Result</Link>
            </li>
            <li>
              <Link to="/league">League</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/player">Player</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="background-container">
          <h1></h1>
        </div>
      </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default Result;
