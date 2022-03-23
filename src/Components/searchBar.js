import React from 'react';
import './search.css'
import { useState, useEffect } from 'react';

 const search = ({brewery}) =>{
 
  // const [data, setData] = useState();

  // useEffect(() => {    
  //   setData(brewery);   
  // }, []);

  return (
      <div className='searchBar'>              
        {/* <input 
        className='searchInput' 
        placeholder='Enter your query here'
        type='text'
        value={search}
        onChange={handleChange}
        />         */}
       
        <button id='searchButton' type='submit'>
          Search Brewery
        </button>    
      </div>
  )
  }

  export default search;