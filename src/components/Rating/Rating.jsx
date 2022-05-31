import React from "react";
function Star() {
  return <i className="fa fa-star rating"></i>;
}
function Rating({ rating }) {

  if (rating === 1) return <Star />;
  if (rating === 2)
    return (
      <>
        <Star />
        <Star />
      </>
    );
  if (rating === 3)
    return (
      <>
        <Star />
        <Star />
        <Star />
      </>
    );
  if (rating === 4)
    return (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
      </>
    );
  if (rating === 5)
    return (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </>
    );
}

export { Rating };
