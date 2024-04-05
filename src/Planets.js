import React from "react";
import { useEffect, useState } from "react";

function Planets() {
  const API_URL = "https://swapi.dev/api/planets"
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

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

useEffect(() => {
  const searchedPlanets = items.filter(item => (item.name.toLowerCase()).includes(search.toLowerCase()));

  setSearchResults(searchedPlanets);
}, [items, search]);

  return (
    <>
    <h5>planet name search</h5>
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="search planets" id="search" placeholder="search planet name..." 
      value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
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
        {searchResults.map((item, index) => (
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
