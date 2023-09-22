import React from "react";
import "../Home.css";
import Buttons from "./Buttons";

const Home = () => {
  return (
    <div id="home">
      <Buttons />
      <div className="team--container">
        <table className="table--team">
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Imię i nazwisko</th>
              <th>Numer na koszulce</th>
              <th>Mecze</th>
              <th>Gole</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Jan Kowalski</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
