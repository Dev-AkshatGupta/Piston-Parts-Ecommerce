import React from "react";
import "./aside.css";
import { useFilterManger } from "../../contextsAndReducer/FilterDataProvider";
function AsideFilter() {
  const { filtered, filterManager } = useFilterManger();
  return (
    <aside className="aside-nav box-shadow-right hero-aside">
      <div className="aside-container-pri">
        <h2>
          Filters
          <span
            className="margin-l-16 link-btn"
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
              name="Price"
              onChange={() => filterManager({ type: "PRICE_HIGH_TO_LOW" })}
            />
            <label htmlFor="input" className="sub-text">
              Price High to low
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="Price"
              onChange={() => filterManager({ type: "PRICE_LOW_TO_HIGH" })}
            />
            <label htmlFor="input" className="sub-text">
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
              checked={filtered.categories.includes("AIR_CONDITIONING")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "AIR_CONDITIONING",
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
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
              name="  Light"
              checked={filtered.categories.includes("Light")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Light",
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              Light
            </label>
          </li>

          <li>
            <input
              type="checkbox"
              name="Mechanical"
              checked={filtered.categories.includes("Mechanical")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Mechanical",
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              Mechanical
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
              onChange={(e) => {
                console.log(e.target.value);

                filterManager({
                  type: "SLIDER",
                  payload: parseInt(e.target.value),
                });
              }}
              className="range"
            />
          </li>
        </ul>
        <div className="divider-2"></div>
        {/* <h3 className="text-dark-grey">Brands</h3> */}
        {/* <ul className="aside-ul">
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
        </ul> */}
        {/* <div className="divider-2"></div>
        <h3 className="text-dark-grey">Enhanced</h3> */}
        {/* <ul className="aside-ul">
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
        </ul> */}
      </div>
    </aside>
  );
}

export { AsideFilter };
