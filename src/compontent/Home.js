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


//
function Home() {
  const [{ cartShow, cartShowA }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Content />

        <Footers />

        <Pss />
       

        {cartShow && <CartItem />}
        {cartShowA && <CartItemsAir />}
        {/* <CartItemsAp/> */}
      </div>
    </>
  );
}

export default Home;
