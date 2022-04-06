import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const FilterDataContext = createContext();

const useFilterManger = () => useContext(FilterDataContext);

function FilterDataProvider({ children }) {
  // fetching the data from the server
  const fetchData = async () => {
    try {
      const { data } = await axios.get("api/products");

      filterManager({ type: "DATA", payload: data.products });
    } catch (error) {
      console.log(error + "in the FilterDataProvider");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // reducer function for the useReducer
  function reducer(state, action) {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          sorted: action.payload,
          defaultData: action.payload,
        };
      case "CATEGORIES_DATA":
        return {
          ...state,
          categoriesData: action.payload,
        };
      case "PRICE_LOW_TO_HIGH": {
        const returnData = {
          ...state,
          priceSort: "PRICE_LOW_TO_HIGH",
          sorted: state.defaultData.sort(
            ({ price: first }, { price: second }) =>
              first.actualPrice - second.actualPrice
          ),
        };

        return returnData;
      }
      case "PRICE_HIGH_TO_LOW": {
        const returnData = {
          ...state,
          priceSort: "PRICE_HIGH_TO_LOW",
          sorted: state.defaultData.sort(
            ({ price: first }, { price: second }) =>
              second.actualPrice - first.actualPrice
          ),
        };

        return returnData;
      }
      case "SLIDER":
        const priceSorted = state.defaultData.filter(
          ({ price }) => price.actualPrice <= action.payload
        );
        return {
          ...state,
          sliderAmount: action.payload,
          sorted: priceSorted,
        };

      case "CATEGORIES":
        if (state.categories.includes(action.payload)) {
          const categoriesArr = state.categories.filter(
            (item) => item !== action.payload
          );

          return {
            ...state,
            categories: categoriesArr,
            sorted: state.defaultData.filter((item) => {
              if (categoriesArr.length > 0)
                return categoriesArr.includes(item.category);
              else return item;
            }),
          };
        } else {
          const categoriesArr = [...state.categories, action.payload];

          return {
            ...state,
            categories: categoriesArr,
            sorted: state.defaultData.filter((item) => {
              return categoriesArr.includes(item.category);
            }),
          };
        }
      case "RATINGS":
        return {
          ...state,
          ratings: action.payload,
          sorted: state.defaultData.filter((item) => {
            return item.rating <= action.payload;
          }),
        };
      case "CLEAR_ALL":
        return {
          ...state,
          sorted: state.defaultData,
          categories: [],
          priceSort: "-",
          sliderAmount: 1500,
          ratings: 5,
        };

      default:
        break;
    }
  }
  const [filtered, filterManager] = useReducer(reducer, {
    sorted: [],
    defaultData: [],
    categories: [],
    categoriesData: [],
    priceSort: [],
    sliderAmount: "",
    ratings: 5,
  });
  return (
    <FilterDataContext.Provider value={{ filtered, filterManager }}>
      {children}
    </FilterDataContext.Provider>
  );
}

export { FilterDataProvider, useFilterManger };
