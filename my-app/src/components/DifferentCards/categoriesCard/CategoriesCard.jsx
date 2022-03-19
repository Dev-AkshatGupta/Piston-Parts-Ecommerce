import React from "react";
import "./Categories-card.css";
function CategoriesCard({ imageUrl, alt, category }) {
  return (
    <div class="categories-card-wrapper background-white">
      <div class="categories-card-img">
        <img src={imageUrl} alt={alt} />
      </div>
      <h3 className="text-dark-grey">{category} </h3>
    </div>
  );
}

export { CategoriesCard };
