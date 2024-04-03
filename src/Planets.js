import { useEffect, useState } from "react";
import React from "react";

function Planets() {
  const API_URL = "https://swapi.dev/api/planets"
  const [items, setItems] = useState([]);
  

const getPlanets = async () => {
  try {
  const response = await fetch(API_URL);
  const data = await response.json();
  const planetsArray = Object.values(data.results);
  console.log(planetsArray);
  setItems(planetsArray);
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  getPlanets();
}, []);

  return (
    <>
     <div>
      <h2>Sooner or later...</h2>
      <p>a grid of star wars planets will go here.</p>
    </div>
    <table className="main">
      <tbody>
        <tr>
          <th>name</th>
          <th>population</th>
          <th>climate</th>
          <th>terrain</th>
          <th>orbital peroid</th>
        </tr>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.population}</td>
            <td>{item.climate}</td>
            <td>{item.terrain}</td>
            <td>{item.orbital_period}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default Planets
