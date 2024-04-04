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
      <table className="main">
        <caption>Grid of Starships from Star Wars</caption>
        <thead>
          <tr>
            <th className="starship-col" scope="col">name</th>
            <th className="starship-col" scope="col">model</th>
            <th className="starship-col" scope="col">manufacturer</th>
            <th className="starship-col" scope="col">hyperdrive rating</th>
            <th className="starship-col" scope="col">cargo capacity</th>
            <th className="starship-col" scope="col">cost in credits</th>
          </tr>
          </thead>
          <tbody className="table-body">
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
