import React from 'react';
import Card from '../Components/Card';

const Home = ({props}) => { 
  return(
  <section className='home'>
    <div className='container'>
      <Card props ={props}/>
    </div>
  </section>
  );
}

export default Home;