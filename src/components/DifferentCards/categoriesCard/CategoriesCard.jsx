import React from "react";
import "./Categories-card.css";
import { useFilterManger } from "../../../ContextsAndReducer/FilterDataProvider";
function CategoriesCard({ imageUrl, alt,text, category }) {
  const { filterManager } = useFilterManger();
  return (
    <div
      className="categories-card-wrapper background-white"
      onClick={() => {
filterManager({ type: "CLEAR_ALL" });
        filterManager({ type: "CATEGORIES", payload: category });
      }}
    >
      <div className="categories-card-img">
        <img src={imageUrl} alt={alt} />
      </div>
      <h3 className="text-dark-grey">{text} </h3>
    </div>
  );
}

export { CategoriesCard };
