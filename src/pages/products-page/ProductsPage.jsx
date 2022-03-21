import React from "react";
import "./ProductsPage.css";
import {
  NavBar,
  Footer,
  BothCard,
  AsideFilter,
  useCartManager,
  useFilterManger,
} from "./importsAndExports";

const ProductsPage = () => {
  const { dispatch, state } = useCartManager();
  const { filtered, filterManager } = useFilterManger();
  return (
    <div>
      <NavBar />
      <div className="empty"></div>
      <section className="hero-sec-grid">
        <AsideFilter />

        <main className="products-main">
          {filtered.sorted.map(
            (
              {
                image,
                manufacturerName,
                quantity,
                outOfStock,
                price,
                name,
                id,
              },
              i
            ) => {
              return (
                <BothCard
                  image={image.src}
                  key={id}
                  manufacturerName={manufacturerName}
                  availability={!outOfStock}
                  price={price.actualPrice}
                  name={name}
                  oldPrice={price.previousPrice}
                  id={id}
                  wishlistManager={dispatch}
                />
              );
            }
          )}
        </main>
      </section>
      <Footer />
    </div>
  );
};

export { ProductsPage };
