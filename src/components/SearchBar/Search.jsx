import "./search.css";
function Search() {
  return (
    <>
      <div className="search-box flex-center">
        <input type="text" className="search-input" placeholder="Search.." />

        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
}
export {Search};