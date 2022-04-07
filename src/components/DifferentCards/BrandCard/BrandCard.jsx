import React from "react";
import "./BrandCard.css";
function BrandCard({ name }) {
  return (
    <div>
      <span className="brand-card ">{name}</span>
    </div>
  );
}

export { BrandCard };
