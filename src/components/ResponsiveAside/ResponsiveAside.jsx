import React from "react";
import "./ResponsiveAside.css";

import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
function ResponsiveAside() {
  const { filtered, filterManager, aside } = useFilterManger();
  return (
    <div id="nav-drawer" className={`bg-style ${aside ? `hide` : null}`}>
      <div className="aside-container-pri">
        <h2>
          Filters
          <span
            className="margin-l-4 link-btn"
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
              onChange={() =>
                filterManager({
                  type: "PRICE_HIGH_TO_LOW",
                  payload: "PRICE_HIGH_TO_LOW",
                })
              }
              checked={filtered?.priceSort == "PRICE_HIGH_TO_LOW"}
            />
            <label htmlFor="input" className="sub-text">
              Price High to low
            </label>
          </li>
          <li>
            <input
              type="radio"
              onChange={() => filterManager({ type: "PRICE_LOW_TO_HIGH" })}
              checked={filtered?.priceSort === "PRICE_LOW_TO_HIGH"}
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
              checked={filtered?.categories.includes("AIR_CONDITIONING")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "AIR_CONDITIONING",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
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
              checked={filtered?.categories.includes("Oil")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Oil",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
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
              checked={filtered?.categories.includes("Light")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Light",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
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
              checked={filtered?.categories.includes("Mechanical")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Mechanical",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
              }}
            />
            <label htmlFor="input" className="sub-text">
              Mechanical
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Mechanical"
              checked={filtered?.categories.includes("Body")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Body",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
              }}
            />
            <label htmlFor="input" className="sub-text">
              Body
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Mechanical"
              checked={filtered?.categories.includes("Engine")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Engine",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
              }}
            />
            <label htmlFor="input" className="sub-text">
              Engine
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="Mechanical"
              checked={filtered?.categories.includes("Brakes")}
              onChange={() => {
                filterManager({
                  type: "CATEGORIES",
                  payload: "Brakes",
                });
                if (filtered?.priceSort) {
                  filterManager({
                    type: filtered?.priceSort,
                    payload: filtered?.priceSort,
                  });
                }
              }}
            />
            <label htmlFor="input" className="sub-text">
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
              value={filtered?.sliderAmount}
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
          <span>0</span>
          <span>??? {filtered?.sliderAmount}</span>
        </li>
        <div className="divider-2"></div>

        <h3 className="text-dark-grey">Ratings</h3>
        <ul className="aside-ul">
          <li>
            <input
              type="checkbox"
              name="category"
              checked={filtered?.ratings === 5}
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
              checked={filtered?.ratings === 4}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 4,
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              4 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              checked={filtered?.ratings === 3}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 3,
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              3 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              checked={filtered?.ratings === 2}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 2,
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              2 and above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category"
              checked={filtered?.ratings === 1}
              onChange={() => {
                filterManager({
                  type: "RATINGS",
                  payload: 1,
                });
              }}
            />
            <label htmlFor="input" className="sub-text">
              1 and above
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { ResponsiveAside };
