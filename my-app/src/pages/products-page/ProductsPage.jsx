import React from "react";
import "./ProductsPage.css";
import {
    NavBar,
  Footer,
  BothCard,
  brandNameData,
  productCardData,
  useCartManager,
} from "./importsAndExports";

const ProductsPage = () => {
  const { dispatch, state } = useCartManager();
  return (
    <div>
      <NavBar/>
      <div className="empty"></div>
      <section className="hero-sec-grid">
        <aside className="aside-nav box-shadow-right hero-aside">
          <div className="aside-container-pri">
            <h2>
              Filters <span className="margin-l-16 link-btn">Clear all</span>
            </h2>

            <h3 className="text-dark-grey">Sort</h3>
            <ul className="aside-ul">
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Price low to High
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Price High to low
                </label>
              </li>
            </ul>

            <div className="divider-2"></div>
            <h3 className="text-dark-grey">Categories</h3>
            <ul className="aside-ul">
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Brakes
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Oils
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Lubricants
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Covers
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Sensors
                </label>
              </li>
            </ul>
            <div className="divider-2"></div>
            <h3 className="text-dark-grey">Price Range</h3>
            <ul className="aside-ul">
              <li>
                {" "}
                <input type="range" min="0" max="1000" className="range" />
              </li>
            </ul>
            <div className="divider-2"></div>
            <h3 className="text-dark-grey">Brands</h3>
            <ul className="aside-ul">
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  {" "}
                  Suzuki
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Mahindra
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Tata
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Hyundai
                </label>
              </li>
            </ul>
            <div className="divider-2"></div>
            <h3 className="text-dark-grey">Enhanced</h3>
            <ul className="aside-ul">
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Turbochargers
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Low level alloys
                </label>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="input" className="sub-text">
                  Air-Suspensions
                </label>
              </li>
            </ul>
          </div>
        </aside>

        <main className="products-main">
          {productCardData.map(
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
