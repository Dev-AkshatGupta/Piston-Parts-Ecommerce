import React from "react";
import "./reviews-card.css";
function ReviewsCard({ review, name }) {
  return (
    <div class="card-vertical border-radius ">
      <div class="card-vertical-upper-text">
        <div class="card-vertical-text padding-4 text">{review}</div>
        <h3 class="card-heading text-accent">{name}</h3>
      </div>
    </div>
  );
}

export { ReviewsCard };
