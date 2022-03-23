import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

const Home = ({ breweries }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("id");
  const [home, setHome] = useState(breweries);

  useEffect(() => {
    setHome(breweries);
  }, [home]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function filterSelect(e) {
    setFilter(document.getElementById("filter").value);
  }

  return (
    <div>
      <div className="searchBar">
        {/* drop down menu to select filter the list of brewery            */}
        <input
          className="searchInput"
          placeholder="Enter your query here"
          type="text"
          value={search}
          onChange={handleChange}
        />
        {breweries &&
          breweries.map((item) => {
            if (item[filter].includes(search)) {
              console.log(item);
            }
          })}
        {/* search bar  */}
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
        {breweries && breweries.map((item) => <Card brewery={item} />)}
      </div>
    </div>
  );
};
export default Home;
