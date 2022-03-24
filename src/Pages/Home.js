import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";


const Home = ({ breweries }) => {
  const [search, setSearch] = useState("Bend");
  const [filter, setFilter] = useState("city");
  const [home, setHome] = useState()

  var searchInput = document.getElementsByClassName('searchInput').value 
    
    
    const searchResult =()=>{
      setSearch(searchInput); 
      console.log(search)
      const result = breweries && breweries.filter((item) => {   
        item[filter].includes(search)               
      })
      setHome(result);
    }
    

  function filterSelect(e) {
    setFilter(document.getElementById("filter").value);
  }

  return (
    <div>
      <div className="searchBar">
        {/* search bar  */}
        <div>
          <form>
            <input className="searchInput" type="text"/>
            <input type='submit' value='search' onClick={searchResult}/>
          </form>
        </div>
      
         {/* drop down menu to select filter the list of brewery */}
        <div className="filterType">
          <select id="filter" name="filter" onChange={filterSelect}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="city">city</option>
            <option value="state">state</option>
            <option value="brewery_type">Brewery_type</option>
          </select>
        </div>
      </div>
      <div className="home">
        {
          breweries && breweries.map((item) => <Card brewery={item} />)
        }
      </div>
    </div>
  );
};
export default Home;
