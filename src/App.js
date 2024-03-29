import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Layout from "./Layout";
import People from "./People";
import Planets from "./Planets";
import Starships from "./Starships";


function App() {
  const url = "https://swapi.dev/api/people/1"
  const [people, setPeople] = useState('');

  useEffect(() => {
    const getSwapi = async () => {
      try {
        const response = await fetch(url);
      } catch (err) {
        console.log(err);
      }
      getSwapi();
    }
  })

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<People people={people} setPeople={setPeople} />}/>
        <Route path="/planets" element={<Planets />}/>
        <Route path="/starships" element={<Starships />}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
