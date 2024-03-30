import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "./Layout";
import People from "./People";
import Planets from "./Planets";
import Starships from "./Starships";


function App() {
  const API_URL = "https://swapi.dev/api/people/"
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState('people');
 

  useEffect(() => {
    const getSwapi = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      } finally {

      }
    }
    getSwapi();
  }, [reqType])

/*    useEffect(() => {
    const peopleArray = Object.entries(items).filter(item => (item.name));
    setItems(peopleArray);
  }, []) */

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<People items={items}  />}/>
        <Route path="/planets" element={<Planets />}/>
        <Route path="/starships" element={<Starships />}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
