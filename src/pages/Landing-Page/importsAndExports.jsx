// imports
import { NavBar } from "../../components/navigation/NavBar";
import { Search } from "../../components/search-bar/Search";
import { Footer } from "../../components/footer/Footer";

import { brandNameData } from "../../DATA/BrandsData";
import { BrandCard } from "../../components/DifferentCards/BrandCard/BrandCard";
import { CategoriesCard } from "../../components/DifferentCards/categoriesCard/CategoriesCard";
import { useFilterManger } from "../contextsAndReducer/FilterDataProvider";
// exports
export {
  NavBar,
  Search,
  Footer,
  brandNameData,
  BrandCard,
  CategoriesCard,
  useFilterManger,
};
