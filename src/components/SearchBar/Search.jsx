import "./search.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "Utilities/debounce";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
import { Link } from "react-router-dom";
function Search() {
  const navigate = useNavigate();
  const { filtered, filterManager } = useFilterManger();
  const [displayModal,setDisplayModal]=useState("");
  // const search = debounce(
  //   (e) =>
  //     filterManager({
  //       type: "SEARCH",
  //       payload: e.target.value,
  //     }),
  //   1500
  // );
  const search = 
    (e) =>
      filterManager({
        type: "SEARCH",
        payload: e.target.value,
      });
  // console.log(filtered.sorted);
  return (
    <div className="search-bar__wrapper">
      <div className="search-box flex-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          onChange={search}
          value={filtered.searchText}
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="search-result__box">
        {filtered.sorted.map((item, i) => {
          if (i < 5)
            return (
              <Link
                to={`/products-page`}
                key={item._id}
                className="link-btn padding-none "
              >
                <p>{item.name}</p>
              </Link>
            );
          else return null;
        })}
      </div>
    </div>
  );
}
export { Search };
