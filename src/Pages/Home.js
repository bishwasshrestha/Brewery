import React from 'react';
import Card from '../Components/Card';
import {useEffect, useState} from 'react';
const Home = () => {  
  const [breweries, setBreweries] = useState(); 

  const getApiData = async () => {   
    const response = await fetch('https://api.openbrewerydb.org/breweries') .then((response) => response.json());    
    setBreweries(response);     
  }; 

  useEffect(() => {getApiData()}, []); 

  return(
  <div className='home'>    
      {breweries && breweries.map(items =>
      <Card props = {items}/>
      )} 
  </div>
  );
}
export default Home;
