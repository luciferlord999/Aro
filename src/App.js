import React, { useContext } from "react";

import Signup from "./Pages/Signup";
import Home from "./compontent/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AirPurifier from "./Pages/AirPurifier";
import ProductDetails from "./Pages/ProductDetails/ProductDetail";
import OurServiceScreen from "./screens/OurServiceScreen";
import TopTredingProductScreen from "./screens/TopTredingProductScreen";
import NewProductPage from "./ProductDetail/NewProductPage";
import CartPage from "./CartPage/CartPage";
import Location from "./Location/Location";


// toggle login

import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "http://3.110.38.250/";
// axios.defaults.headers.post['Content-Type']='Application/json'
// axios.defaults.headers.post['Accept']='Application/json'
// axios.defaults.withCredentials = true;
function App(props) {
  return (
    <>
      {/* <Home/> */}
      <Router>
        {/* <ToastContainer className="foo" style={{zIndex:"9999999"}}/> */}

        <Routes>
          <Route path="*" element={<Error />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/our-apliances/:category_url" element={<AirPurifier />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/product-details/:product_url" element={<TopTredingProductScreen />} />

          {/* <Route
            path="/product-details"
            element={<ProductDetails />}
          /> */}
          <Route
            path="/product/:name/"
            element={<OurServiceScreen />}
            exact
          />

          <Route path="/NewProductPage"
            element={<NewProductPage/>}
          />

          {/* cart pagfes royting */}
         <Route path="/cart-page" element={<CartPage/>}/>
         <Route path="/loaction" element={<Location/>}/>
          

         

          <Route component={<Error />} />
        </Routes>

        {/* <About/> */}
      </Router>
    </>
  );
}

export default App;
