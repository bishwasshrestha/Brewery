import React, { Component } from 'react';
import './card.css';
import fullCard from '../Pages/Fullcard';
import { Link} from 'react-router-dom';
import {useState, useEffect} from 'react'


const Card = ({brewery}) => {

  // const [brewDetails, setDetails ] = useState();
  // useEffect(() => {setDetails(brewery)}, [brewDetails]); 

  return (     
    <div className='card'>
        <div className='cardDetails'>
          <p> <strong>Name: </strong>{brewery.name}</p>
          <p> <strong>BreweryType: </strong>{brewery.brewery_type}</p>
          <p> <strong>City: </strong>{brewery.city}</p>
        </div>
{/* passing data has encountered some issue due to recent react-router-dom update  */}

        <div className='viewMore'>    
          <Link 
            className='breweryDetails' 
            to={{pathname:`/FullCard/${brewery.id}`
            }}> 
              View Details
          </Link>
        </div>
     </div>
  )
}

export default Card;