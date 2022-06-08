import "./search.css";
import {useNavigate} from "react-router-dom"
function Search() {
  const navigate=useNavigate();
  return (
    <>
      <div className="search-box flex-center">
        <input type="text" className="search-input" placeholder="Search.." onClick={()=>{navigate("/products-page")}} />

        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
}
export {Search};