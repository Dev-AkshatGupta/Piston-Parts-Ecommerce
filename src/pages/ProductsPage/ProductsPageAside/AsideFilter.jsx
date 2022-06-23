import React from "react";
import "./aside.css";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
function AsideFilter() {
  const { filtered, filterManager } = useFilterManger();

  return (
    <aside className="aside-nav box-shadow-right hero-aside aside-display">
      <div className="aside-container-pri ">
        <h2>
          Filters
          <span
            className="margin-l-12 link-btn"
            onClick={() => filterManager({ type: "CLEAR_ALL" })}
          >
            Clear all
          </span>
        </h2>

        <h3 className="text-dark-grey">Sort</h3>
        <ul className="aside-ul">
          <li>
            <input
              type="radio"
              id="PRICE_HIGH_TO_LOW"
              onChange={() => {
                filterManager({
                  type: "PRICE_HIGH_TO_LOW",
                  payload: "PRICE_HIGH_TO_LOW",
                });
              }}
              checked={filtered.priceSort === "PRICE_HIGH_TO_LOW"}
            />

            <label htmlFor="PRICE_HIGH_TO_LOW" className="sub-text">
              Price High to low
            </label>
          </li>
          <li>
            <input
              id="PRICE_LOW_TO_HIGH"
              type="radio"
              onChange={() => {
                filterManager({
                  type: "PRICE_LOW_TO_HIGH",
                  payload: "PRICE_LOW_TO_HIGH",
                });
              }}
              checked={filtered.priceSort === "PRICE_LOW_TO_HIGH"}
            />
            <label htmlFor="PRICE_LOW_TO_HIGH" className="sub-text">
              Price Low to High
            </label>
          </li>
        </ul>

        <div className="divider-2"></div>
        <h3 className="text-dark-grey">Categories</h3>
        <ul className="aside-ul">
          <li>
            <input
              type="checkbox"
              name="Air conditioning"
              id="AIR_CONDITIONING"
              checked={filtered.categories.includes("AIR_CONDITIONING")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "AIR_CONDITIONING",
                });
              }}
            />
            <label htmlFor="AIR_CONDITIONING" className="sub-text">
              Air conditioning
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Oils"
              checked={filtered.categories.includes("Oil")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Oil",
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              Oils
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Light"
              id="Light"
              checked={filtered.categories.includes("Light")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Light",
                });
              }}
            />
            <label htmlFor="Light" className="sub-text">
              Light
            </label>
          </li>

          <li>
            <input
              type="checkbox"
              name="Mechanical"
              id="Mechanical"
              checked={filtered.categories.includes("Mechanical")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Mechanical",
                });
              }}
            />
            <label htmlFor="Mechanical" className="sub-text">
              Mechanical
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Body"
              id="Body"
              checked={filtered.categories.includes("Body")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Body",
                });
              }}
            />
            <label htmlFor="Body" className="sub-text">
              Body
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Mechanical"
              id="Engine"
              checked={filtered.categories.includes("Engine")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Engine",
                });
              }}
            />
            <label htmlFor="Engine" className="sub-text">
              Engine
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Brakes"
              id="Brakes"
              checked={filtered.categories.includes("Brakes")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Brakes",
                });
              }}
            />
            <label htmlFor="Brakes" className="sub-text">
              Brakes
            </label>
          </li>
        </ul>
        <div className="divider-2"></div>
        <h3 className="text-dark-grey">Price Range</h3>
        <ul className="aside-ul">
          <li>
            <input
              type="range"
              name="Price"
              min="0"
              max="1500"
              value={filtered.sliderAmount}
              onChange={(e) => {
                filterManager({
                  type: "SLIDER",
                  payload: parseInt(e.target.value),
                });
              }}
              className="range"
            />
          </li>
        </ul>
        <li className="flex-center-space-betw padding-l-r text ">
          <span>₹ 0</span>
          <span>₹ {filtered.sliderAmount}</span>
        </li>
        <div className="divider-2"></div>

        <h3 className="text-dark-grey">Ratings</h3>
        <ul className="aside-ul">
          <li>
            <input
              type="checkbox"
              name="category"
              checked={filtered.ratings === 5}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 5,
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              5 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              id="ratings-4"
              checked={filtered.ratings === 4}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 4,
                });
              }}
            />
            <label htmlFor="ratings-4" className="sub-text">
              4 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              id="ratings-3"
              checked={filtered.ratings === 3}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 3,
                });
              }}
            />
            <label htmlFor="ratings-3" className="sub-text">
              3 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              id="ratings-2"
              checked={filtered.ratings === 2}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 2,
                });
              }}
            />
            <label htmlFor="ratings-2" className="sub-text">
              2 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              id="ratings-1"
              checked={filtered.ratings === 1}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 1,
                });
              }}
            />
            <label htmlFor="ratings-1" className="sub-text">
              1 and above
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export { AsideFilter };
