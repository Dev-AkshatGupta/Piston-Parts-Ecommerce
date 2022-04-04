// imports
import { NavBar } from "../../components/navigation/NavBar";

import { Footer } from "../../components/footer/Footer";
import { useCartManager } from "../contextsAndReducer/CartManagementProvider";
import { BothCard } from "../../components/DifferentCards/Cart-Product-Big/CardProductBig";
import { useFilterManger } from "../contextsAndReducer/FilterDataProvider";
import { AsideFilter } from "./products-page-aside/AsideFilter";
// exports
export { NavBar, Footer, BothCard, useCartManager, useFilterManger,AsideFilter };