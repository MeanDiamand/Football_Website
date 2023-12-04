import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import {fetchTable} from "./lib/fetch-table";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Table() {
  const [Tables, setTables] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTable();
        setTables(result.api.standings[0]);
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
          <h1>Table</h1>
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
        <table className="Table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Matches Played</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals For</th>
              <th>Goals Against</th>
              <th>Goal Difference</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {Tables.map((tables) => (
              <tr key={tables.team_id}>
                <td>{tables.rank}</td>
                <td>{tables.teamName}</td>
                <td>{tables.matchsPlayed}</td>
                <td>{tables.win}</td>
                <td>{tables.draw}</td>
                <td>{tables.lose}</td>
                <td>{tables.goalsFor}</td>
                <td>{tables.goalsAgainst}</td>
                <td>{tables.goalsDiff}</td>
                <td>{tables.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default Table;
