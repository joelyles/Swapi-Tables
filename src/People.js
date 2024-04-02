// helped by https://upmostly.com/tutorials/how-to-display-json-data-in-react-table

import React, { useEffect } from "react";
import Table from "./Table";
import { useState } from "react";

function People() {
  const API_URL = "https://swapi.dev/api/people/"
  const [items, setItems] = useState([]);

  
  const getPeople = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      const peopleArray = Object.values(data.results);
      /* console.log(peopleArray); */
      setItems(peopleArray);
    } catch (err) {
      console.log(err);
    } finally {

    }
  }

  useEffect(() => {
  getPeople();
  }, []);


  return (
    <>
      <div>
      <h2>One day or another...</h2>
      <p>a grid of people from Starwars will be here.</p>
      </div>
      <table className="main">
        <tbody className="table-body">
          <tr>
            <th>name</th>
            <th>height</th>
            <th>mass</th>
            <th>eye color</th>
            <th>birth year</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.mass}</td>
              <td>{item.eye_color}</td>
              <td>{item.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default People
