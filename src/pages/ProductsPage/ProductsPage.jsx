import React, { useState } from "react";
import "./ProductsPage.css";
import { NavBar, Footer, BothCard, ResponsiveAside } from "components";
import { AsideFilter } from "./ProductsPageAside/AsideFilter";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
import ReactPaginate from "react-paginate";
const PER_PAGE = 6;
const ProductsPage = () => {
  const { filtered } = useFilterManger();
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * PER_PAGE;
  const currentPageData = filtered.sorted
    .slice(offset, offset + PER_PAGE)
    .map((item, i) => (
      <BothCard
        image={item.image.src}
        key={item._id}
        manufacturerName={item.manufacturerName}
        availability={!item.outOfStock}
        price={item.price.actualPrice}
        name={item.name}
        oldPrice={item.price.previousPrice}
        id={item._id}
        wholeItem={item}
      />
    ));
  const pageCount = Math.ceil(filtered.sorted.length / PER_PAGE);

  return (
    <div>
      <NavBar menuBtn={true} />
      <div className="empty"></div>
      <section className="hero-sec-grid">
        <AsideFilter />
        <ResponsiveAside />
        {currentPageData.length === 0 ? (
          <div className="text height-100vh flex-center-center"> There are no such items</div>
        ) : (
          <main className="products-main">{currentPageData}</main>
        )}
      </section>
      <div className="flex-center-center">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="pagination-active"
          renderOnZeroPageCount={null}
        />
      </div>
      <Footer />
    </div>
  );
};

export { ProductsPage };
