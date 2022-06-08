import React, { useEffect } from "react";
import "./LandingPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  NavBar,
  Search,
  Footer,
  BrandCard,
  CategoriesCard,
} from "components";
import {useFilterManger,} from "ContextsAndReducer/FilterDataProvider";
import { brandNameData,} from "DATA/BrandsData";
function LandingPage() {
  const { filtered, filterManager } = useFilterManger();
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("api/categories");

      filterManager({ type: "CATEGORIES_DATA", payload: data.categories });
    } catch (error) {
      console.log(error + "in the getting categories");
    }
  };
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="flex-center banner-div_upper">
        <div className="banner-div flex-center-space-betw padding-l-r">
          <div className="for-search flex-center ">
            <Search />
          </div>
          <div className="for-animation flex-center flex-align-end"></div>
        </div>
      </div>
      <div className="flex-center hero-wrapper">
        <div>
          <h2>
            <span className="sub-text">Popular</span> Car Makers
          </h2>
        </div>
        <div className="flex-center sub-hero-wrapper">
          {brandNameData.map(({ brand }) => (
            <Link to="/products-page" key={brand}>
              <BrandCard name={brand} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-center hero-wrapper margin-top-0 ">
        <div>
          <h2>
            <span className="sub-text">Search </span> by Categories
          </h2>
        </div>
        <div className="flex-center sub-hero-wrapper">
          {filtered.categoriesData.map(({ text, image, _id, category }) => (
            <Link to="/products-page" key={_id}>
              <CategoriesCard
                text={text}
                imageUrl={image}
                alt={text}
                category={category}
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { LandingPage };
