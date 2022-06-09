import { useState } from "react";
import "./Cart-Product-Big.css";
import { CardProductBig } from "./DescriptionCard";
import { Card } from "./NormalCard";

function BothCard({
  image,
  manufacturerName,
  name,
  price,
  oldPrice,
  availability,
rating,
  id,
  wholeItem,
}) {
  const [view, setView] = useState(true);
  return (
    <>
      {view && (
        <Card
          image={image}
          manufacturerName={manufacturerName}
          name={name}
          price={price}
          oldPrice={oldPrice}
          id={id}
          stateChanger={setView}
          state={view}
          wholeItem={wholeItem}
        />
      )}
      {!view && (
        <CardProductBig
          image={image}
          manufacturerName={manufacturerName}
          name={name}
          price={price}
          availability={availability}
          stateChanger={setView}
          state={view}
          id={id}
          wholeItem={wholeItem}
          rating={rating}
        />
      )}
    </>
  );
}

export { BothCard };
