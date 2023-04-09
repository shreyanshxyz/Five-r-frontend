import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  // When data is fetched from a database, we use the card prop which then goes to the database and pulls the card's image, description, title.

  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
