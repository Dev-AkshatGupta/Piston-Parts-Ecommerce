import React from "react";
import "./ProductsPage.css";
import { NavBar, Footer, BothCard, ResponsiveAside } from "components";
import { AsideFilter } from "./ProductsPageAside/AsideFilter";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";

const ProductsPage = () => {
  const { filtered } = useFilterManger();
  return (
    <div>
      <NavBar menuBtn={true} />
      <div className="empty"></div>
      <section className="hero-sec-grid">
        <AsideFilter />
        <ResponsiveAside />
        <main className="products-main">
          {filtered.sorted.map((item, i) => {
            return (
              <BothCard
                image={item.image.src}
                key={item._id}
                manufacturerName={item.manufacturerName}
                availability={!item.outOfStock}
                price={item.price.actualPrice}
                name={item.name}
                oldPrice={item.price.previousPrice}
                id={item._id}
                wholeItem={item}
              />
            );
          })}
        </main>
      </section>
      <Footer />
    </div>
  );
};

export { ProductsPage };
