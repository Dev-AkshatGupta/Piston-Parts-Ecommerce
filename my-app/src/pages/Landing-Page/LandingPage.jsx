import React from "react";
import "./LandingPage.css";

import {
  NavBar,
  Search,
  Footer,
  brandNameData,
  BrandCard,
  CategoriesCard,
  categoriesImages,
} from "./importsAndExports";
function LandingPage() {
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
            <BrandCard name={brand} />
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
          {categoriesImages.map(({ text, image }) => (
            <CategoriesCard category={text} imageUrl={image} alt={text} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { LandingPage };
