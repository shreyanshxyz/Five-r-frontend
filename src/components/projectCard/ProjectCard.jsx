import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ card }) {
  // When data is fetched from a database, we use the card prop which then goes to the database and pulls the card's image, description, title.
  return (
    <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="info">
        <img src={card.pp} alt="" />
        <div className="texts">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
