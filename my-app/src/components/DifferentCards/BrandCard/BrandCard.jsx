import React from "react";
import "./BrandCard.css";
function BrandCard({ name }) {
  return (
    <div>
      <a className="brand-card ">{name}</a>
    </div>
  );
}

export { BrandCard };
