import React from "react";
import "./reviews-card.css";
function ReviewsCard({ review, name }) {
  return (
    <div className="card-vertical border-radius ">
      <div className="card-vertical-upper-text">
        <div className="card-vertical-text padding-4 text">{review}</div>
        <h3 className="card-heading text-accent">{name}</h3>
      </div>
    </div>
  );
}

export { ReviewsCard };
