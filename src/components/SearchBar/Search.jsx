import "./search.css";
import {useNavigate} from "react-router-dom"
function Search() {
  const navigate=useNavigate();
  return (
    <div className="search-bar__wrapper">
      <div className="search-box flex-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          //  onClick={()=>{navigate("/products-page")}}
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