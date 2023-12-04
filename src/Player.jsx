import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import {fetchPlayer} from "./lib/fetch-player";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Player() {
  const [Players, setPlayers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPlayer();
        setPlayers(result.response);
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
          <h1>Player</h1>
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
      {Players.map((players) => (
            <div className="Player" key={players.player.id}>
              <div id="info">
                <img src={players.player.photo}/>
                  <div>
                    Name: {players.player.firstname} {players.player.lastname}
                    <br />
                    Nationality: {players.player.nationality}
                    <br />
                    Age: {players.player.age}
                    <br />
                    Date of Birth: {players.player.birth.date}
                    <br />
                    Birth Place: {players.player.birth.place}
                    <br />
                    Team: {players.statistics[0].team.name}
                    <br />
                    Goal: {players.statistics[0].goals.total}
                  </div>
              </div>
              <img id="team-logo" src={players.statistics[0].team.logo}/>
            </div>
          ))}

        </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default Player;
