import React from "react";
import { useParams } from "react-router-dom";
const SingleProductPage = () => {
  const {id} = useParams();
  console.log(id);
  return <div>This is the single product page</div>;
};

export { SingleProductPage };
