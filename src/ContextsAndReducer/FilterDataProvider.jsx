import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [aside, setAside] = useState(true);

  function reducer(state, action) {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          sorted: action.payload,
          defaultData: action.payload,
          isLoading: false,
        };
      case "CATEGORIES_DATA":
        return {
          ...state,
          categoriesData: action.payload,
        };
      case "PRICE_LOW_TO_HIGH": {
        const returnData = {
          ...state,
          priceSort: action.payload,
          sorted: state.sorted.sort(
            ({ price: first }, { price: second }) =>
              first.actualPrice - second.actualPrice
          ),
        };

        return returnData;
      }
      case "PRICE_HIGH_TO_LOW": {
        const returnData = {
          ...state,
          priceSort: action.payload,
          sorted: state.sorted.sort(
            ({ price: first }, { price: second }) =>
              second.actualPrice - first.actualPrice
          ),
        };

        return returnData;
      }
      case "SLIDER":
        const priceSorted = state.defaultData.filter(
          ({ price, category, rating }) => {
            if (state.categories.length > 0 && state.rating)
              return (
                price.actualPrice <= action.payload &&
                state.categories.includes(category) &&
                rating >= state.rating
              );
            else if (state.categories.length > 0) {
              return (
                price.actualPrice <= action.payload &&
                state.categories.includes(category)
              );
            } else if (state.rating) {
              return (
                price.actualPrice <= action.payload && rating >= state.rating
              );
            } else return price.actualPrice <= action.payload;
          }
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
        const sorted = state.defaultData.filter((item) => {
          if (state.categories.length > 0)
            return (
              item.rating >= action.payload &&
              state.categories.includes(item.category) &&
              item.price.actualPrice <= state.sliderAmount
            );
          else
            return (
              item.rating >= action.payload &&
              item.price.actualPrice <= state.sliderAmount
            );
        });
        return {
          ...state,
          ratings: action.payload,
          sorted,
        };

      case "CLEAR_ALL":
        return {
          ...state,
          sorted: state.defaultData,
          categories: [],
          priceSort: "-",
          sliderAmount: 1500,
          ratings: 1,
        };
      case "SEARCH":
        const search = {
          ...state,
          searchText: action.payload,
          sorted: state.defaultData.filter(({ name }) => {
            return name.toLowerCase().includes(action.payload);
          }),
        };
        return search;

      default:
        break;
    }
  }
  const [filtered, filterManager] = useReducer(reducer, {
    sorted: [],
    defaultData: [],
    categories: [],
    categoriesData: [],
    priceSort: "",
    sliderAmount: 1500,
    ratings: 1,
    searchText: "",
    isLoading: true,
  });
  return (
    <FilterDataContext.Provider
      value={{ filtered, filterManager, aside, setAside }}
    >
      {children}
    </FilterDataContext.Provider>
  );
}

export { FilterDataProvider, useFilterManger };
