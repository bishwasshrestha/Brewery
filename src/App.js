import { ReactDOM } from 'react-dom';
import { Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Search from './Components/searchBar'
import {useState, useEffect} from 'react'
import data from './data2'


function App() {
  const [breweries, setBreweries] = useState(); 
 
  const getApiData = async () => {   
    const response = await fetch('https://api.openbrewerydb.org/breweries') .then((response) => response.json())
    .catch((err)=>console.log('error'));    
    setBreweries(response);         
  }; 

  useEffect(() => {
    getApiData();   
  }, []); 
  
 
  return (   
    <div className='App'>     
      <div className='home'>
        <Home breweries ={breweries} />
      </div>
      <nav>        
        <Link to='/FullCard'></Link>
        <Link to='/ErrorPage'> </Link> 
      </nav> 
    </div>
  );
}

export default App;
