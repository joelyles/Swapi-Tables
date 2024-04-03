import React from "react";
import { useState, useEffect } from "react";

function Starships() {
  const API_URL = "https://swapi.dev/api/starships";
  const [items, setItems] = useState([]);

const getStarships = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const starshipArray = Object.values(data.results);
    /* console.log(starshipArray); */
    setItems(starshipArray);
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  getStarships();
}, []);

  return (
    <>
      <div>
        <h2>Grid of Starships from Star Wars</h2>
      </div>
      <table className="main">
        <tbody>
          <tr>
            <th>name</th>
            <th>model</th>
            <th>manufacturer</th>
            <th>hyperdrive rating</th>
            <th>cargo capacity</th>
            <th>cost in credits</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.manufacturer}</td>
              <td>{item.hyperdrive_rating}</td>
              <td>{item.cargo_capacity}</td>
              <td>{item.cost_in_credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )

}

export default Starships
