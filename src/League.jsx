import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import {fetchLeague} from "./lib/fetch-league";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function League() {
    const [Leagues, setLeagues] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchLeague();
          setLeagues(result.response); 
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData(); 
    }, []);

  return (
    <div id="top">
      <div>
        <div id="header">
          <Link to="/"><img id="logo" src="/Logo.png" width="150px" alt="RTF_logo" /></Link>
          <h1>League</h1>
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
        <h1>
          These are all the Leagues over the world that this website is covered.
        </h1>
        {Leagues.map((leagues) => (
              <div className="League" key={leagues.league.id}>
                <img src={leagues.league.logo} /> 
                <br />
                Name: {leagues.league.name}
                <br />
                Type: {leagues.league.type}
                <br />
                Participated Country: {leagues.country.name} 
              </div>
            ))}
        </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default League;
