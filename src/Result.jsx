import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import {fetchFixtures} from "./lib/fetch-result";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Result = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFixtures();
        setFixtures(result.response); 
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
      </div>
      <div id="background-container">
          {fixtures.map((fixture) => (
            <div className="result" key={fixture.fixture.id}>
              <div id="league-logo">
                <img src = {fixture.league.logo}/>
                {fixture.league.name} <br /> {fixture.fixture.status.elapsed}' {fixture.fixture.status.long}
              </div>
              <div id="score">
                <img src = {fixture.teams.home.logo}/> {fixture.teams.home.name}        
                <div id="point">
                  {fixture.goals.home} vs {fixture.goals.away}
                </div>        
                {fixture.teams.away.name} <img src = {fixture.teams.away.logo} />
              </div>
            </div>
          ))}
        </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default Result;
