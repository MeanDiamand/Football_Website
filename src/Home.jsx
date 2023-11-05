import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div id="top">
      <div>
        <div id="header">
          <Link to="/"><img id="logo" src="/Logo.png" width="150px" alt="RTF_logo" /></Link>
          <h1>Real-time Football</h1>
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
      </div>
      <div id="background-container">
          <div id="welcome">
            <h1>Welcome the Real-Time Football Website</h1>
            <p>
              This website provide the Results, Leagues, Score Tables, Players of most of the football matches all around the world
            </p>
            <Link to="/result">
              <button>
                  Get Started
              </button>
            </Link>
          </div>
        </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
