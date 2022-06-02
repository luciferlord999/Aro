import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

import Banner from "./Content/Banner";
import Content from "./Content/Content";
// import Footer from "./Footer/Footer";
import CartItem from "../compontent/CartItem";
import { useStateValue } from "./StateProvider";
import CartItemsAp from "./CartItemsAp";
import CartItemsAir from "../Pages/CartItemsAir";
import Pss from "./Content/Pss";
import Footers from "../Pages/ProductDetails/Footers";
import LoadingBox from "../compontent/LoadingBox";
import SkeletonOurApp from "../Skeleton/SkeletonOurApp";
import axios from "axios";
import { API_key } from "../Api/Api";
import { API_endpoint } from "../Api/Api";

//
function Home() {
  const [{ cartShow, cartShowA }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => { }, [scrollValue, cartShow]);


  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitutde] = useState("");
  // const [location, sectLocation] = useState(null);
  // navigator.geolocation.watchPosition((position) => {
  //   setLatitude(position.coords.latitude);
  //   setLongitutde(position.coords.longitude);
  //   console.log(position.coords);
  // });





  return (
    <>
      {/* 0 */}


      <Navbar />
      <Banner />
      <Content />
      <Footers />



      {cartShow && <CartItem />}
      {cartShowA && <CartItemsAir />}
    </>
  );
}

export default Home;
