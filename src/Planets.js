import React from "react";
import { useEffect, useState } from "react";

function Planets() {
  const API_URL = "https://swapi.dev/api/planets"
  const [items, setItems] = useState([]);
  

const getPlanets = async () => {
  try {
  const response = await fetch(API_URL);
  const data = await response.json();
  const planetsArray = Object.values(data.results);
  /* console.log(planetsArray); */
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
    <table className="main">
      <caption>Grid of Planets from Star Wars</caption>
      <thead>
        <tr>
          <th className="planet-col" scope="col">name</th>
          <th className="planet-col" scope="col">population</th>
          <th className="planet-col" scope="col">climate</th>
          <th className="planet-col" scope="col">terrain</th>
          <th className="planet-col" scope="col">orbital peroid</th>
        </tr>
      </thead>
      <tbody className="table-body" >
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
