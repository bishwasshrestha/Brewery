import React, {useEffect, useState} from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Card from './Components/Card'

function App() {
  const [breweries, setBreweries] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://api.openbrewerydb.org/breweries"
    ).then((response) => response.json());

    setBreweries(response);
   // console.log(response)
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (   
    <div className='App'>
      <div className='searchBar'>              
          <input className='searchInput' placeholder='Enter your query here'></input>
          <button id='searchButton' type='submit'>
            Search Brewery
          </button>    
      </div>
      <div className='home'>      
        {breweries && breweries.map(items => 
        <div className='container'>     
        <Home props={items}/>
        </div>)      
        }
      </div>   
    </div>
  );
}


export default App;
