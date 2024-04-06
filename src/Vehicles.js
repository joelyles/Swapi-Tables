import React from 'react'
import { useState, useEffect } from 'react'

function Vehicles() {
    const API_URL = 'https://swapi.dev/api/vehicles/';
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const getVehicles = async () => {
        try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const vehiclesArray = Object.values(data.results);
        setItems(vehiclesArray);
        } catch (err) {
            console.log(err);
        }
    }

useEffect(() => {
    getVehicles();
}, []);

useEffect(() => {
    const searchedVehicles = items.filter(item => (item.name.toLowerCase().includes(search.toLowerCase())));

    setSearchResults(searchedVehicles);
}, [items, search]);

    return (
        <>
        <h5>vehicles name search</h5>
        <form className='search' onSubmit={(e) => e.preventDefault()}>
            <input type="text" name='search vehicles' placeholder='search vehicle name...' 
            value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        <table className='main'>
            <caption>Grid of Vehicles from Star Wars</caption>
            <thead>
                <tr>
                    <th>name</th>
                    <th>model</th>
                    <th>length</th>
                    <th>vehicle class</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.model}</td>
                        <td>{item.length}</td>
                        <td>{item.vehicle_class}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
    
}



export default Vehicles
