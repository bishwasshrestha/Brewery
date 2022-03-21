import React from 'react';
import './card.css';

const Card = ({props}) => {
 const details = props
  return (    
      <div className='card'>
          <div className='cardDetails'>
          <li>name:{details.name}</li>
          <li>breweryType:{details.brewery_type}</li>
          <li>city:{details.city}</li>
        </div>
        <div className='viewMore'>
          <p>View Detail</p>
        </div>
      </div>
  )
}

export default Card;