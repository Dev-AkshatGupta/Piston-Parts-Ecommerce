import "./App.css";
import logo from "./logo.png";
import { ProductsPage } from "./pages/products-page/ProductsPage";
// import {LandingPage} from "./pages/Landing-Page/LandingPage"
// import {NavBar} from "./components/navigation/NavBar";
function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <ProductsPage/>
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
