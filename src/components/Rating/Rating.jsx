import React from "react";
function Star() {
  return <i className="fa fa-star rating"></i>;
}
function Rating({ rating }) {
  for (let i = 0; i < rating; rating++) {
    return <Star />;
  }
}

export { Rating };
