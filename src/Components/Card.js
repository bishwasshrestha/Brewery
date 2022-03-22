import React from 'react';
import './card.css';
import fullCard from '../Pages/Fullcard';
import { Link } from 'react-router-dom';
const Card = ({props}) => {
const data = props
   return (     
    <div className='card'>
        <div className='cardDetails'>
          <li><strong>Name: </strong>{data.name}</li>
          <li><strong>BreweryType: </strong>{data.brewery_type}</li>
          <li><strong>City: </strong>{data.city}</li>
        </div>
        <div className='viewMore'>
        <Link to={`/FullCard/${data.id}`}>          
            View Details
          </Link>
        </div>
     </div>
  )
}

export default Card;