import "./search.css";
export function Search() {
  return (
    <>
      <div class="search-box flex-center" >
        <input type="text" class="search-input" placeholder="Search.." />

        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
}
