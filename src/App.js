import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import People from "./People";
import Planets from "./Planets";
import Starships from "./Starships";
import Vehicles from "./Vehicles";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<People />}/>
        <Route path="/planets" element={<Planets />}/>
        <Route path="/starships" element={<Starships />}/>
        <Route path="/vehicles" element={<Vehicles />}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
