import "./search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "Utilities/debounce";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
import { v4 as uuid } from "uuid";
function Search() {
  const navigate = useNavigate();
  const { filtered, filterManager } = useFilterManger();
  const [input, setInput] = useState("");
  const search = debounce(
    (e) =>
      filterManager({
        type: "SEARCH",
        payload: e.target.value,
      }),
    1500
  );

  return (
    <div className="search-bar__wrapper">
      <div className="search-box flex-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          onChange={(e) => {
            search(e);
            setInput(e.target.value);
          }}
          onKeyUp={(e) => {
          
            if(e.key==="Enter"&&input.trim()!=="")
            navigate("/products-page", { state: input });
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            navigate("/products-page", { state: input });
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="search-result__box">
        {input.trim() !== "" &&
          filtered.sorted.map((item, i) => {
            if (i < 5)
              return (
                <a
                  className="link-btn padding-none "
                  onClick={() => navigate("/products-page", { state: input })}
                  key={uuid()}
                >
                  <p>{item.name}</p>
                </a>
              );
            else return null;
          })}
      </div>
    </div>
  );
}
export { Search };
