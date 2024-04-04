// helped by https://upmostly.com/tutorials/how-to-display-json-data-in-react-table

import React from "react";
import { useState, useEffect } from "react";

function People() {
  const API_URL = "https://swapi.dev/api/people/"
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
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

  useEffect(() => {
    const searchedPeople = items.filter(item => ((item.name).includes(search)));

    setSearchResults(searchedPeople);
  }, [items, search]);


  return (
    <>
      <table className="main">
        <caption>Grid of People from Star Wars</caption>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">height</th>
            <th scope="col">mass</th>
            <th scope="col">eye color</th>
            <th scope="col">birth year</th>
          </tr>
        </thead>
          <tbody className="table-body">
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
