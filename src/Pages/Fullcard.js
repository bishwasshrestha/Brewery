import React from "react";
import Home from "./Home";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import "../Components/card.css";
import brew from "../data2";
const fullCard = () => {
  const param = useParams();

  const result = brew.filter((item) => item.id == param.id);

  const brewery = result[0];

  return (
    <div className="Fullcardpage">
      <div className="Fullcard">
        <div className="Headline">
          <h3>Brewery details</h3>
        </div>
        <div className="cardDetails">
          {Object.entries(brewery).map(([key, val]) => (
            <li key={key}>
              <strong>{key}</strong>:{val}
            </li>
          ))}
        </div>
        <div className="goBack">
          <p>Go Back </p>
        </div>
      </div>
    </div>
  );
};

export default fullCard;
