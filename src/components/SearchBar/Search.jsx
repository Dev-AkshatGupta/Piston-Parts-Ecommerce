import "./search.css";
import {useNavigate} from "react-router-dom";
import { debounce } from "Utilities/debounce";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
function Search() {
  const navigate=useNavigate();
    const {  filterManager } = useFilterManger();
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
          onChange={search}
        />

        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="search-result__box">
        <p>Akshat</p>
        <p>shankey</p>
        <p>shwetambara</p>
      </div>
    </div>
  );
}
export {Search};