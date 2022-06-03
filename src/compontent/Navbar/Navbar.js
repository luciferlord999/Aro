import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Signup from "../../Pages/Signup";
import { MdShoppingCart } from "react-icons/md";
import { useStateValue } from "../StateProvider";
import { actionType } from "../../Context/reducer";
import NavbarCaro from "./NavbarCaro";
import axios from "axios";
import BassURl from "../../Api/Api";

function Navbar() {
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };


  const [posets, setPosets] = useState(null);
  useEffect(() => {
    axios.get(`/web-api/all-service-category`).then((response) => {
      setPosets(response.data.data);

    });

  }, []);



  return (
    <>
      <header className="site-header header-transparent mo-left">
        {/* main header */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* website logo */}
              <div className="logo-header mostion">
                <a href="/" className="logo-1">
                  <img src="/images/logo.png" alt />
                </a>
                <a href="/" className="logo-2">
                  <img src="/images/logo2.webp" alt />
                </a>
              </div>
              {/* nav toggle button */}
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
              {/* extra nav */}

              <div className="megaMenuHide" style={{}}>
                {
                  posets?.map((data, index) => {
                    return (
                      <div
                        className="Grid__item--JyxXq SearchAndGridHeader__gridContainerClass--2ra3O"
                        title={data?.service_title}
                      >
                        <div className="LazyLoadImage__imageContainer--3EOU_ Grid__imageContainer--1Fs8D SearchAndGridHeader__imageContainerClass--2nzhk">
                          <div className="TemplateShimmer__shimmer--1HNwN TemplateShimmer__shimmerWrapper--Py2CJ TemplateShimmer__hidden--1oL9u" />
                          <img
                            className="Grid__image--IV0GE"
                            src={BassURl + data?.service_img}
                            alt=""
                            itemScope=""
                            itemProp="image"
                          />
                        </div>
                        <span className="Grid__text--cEuUL SearchAndGridHeader__gridtextClass--35aaB">
                          {data?.service_title}
                        </span>
                      </div>

                    )
                  })

                }


              </div>















              <div className="extra-nav extra-navTop ">
                <div className="extra-cell">
                  <a href="signup" className="site-button-link white">
                    <i className="ti-import m-r5 rotate90" /> Sign In
                  </a>
                  <a href="/signup" className="site-button radius-xl m-l10">
                    <i className="fa fa-plus m-r5" /> Sign Up
                  </a>

                  {/* <a href="signup" className="site-button-link white">
                    <i className="ti-import m-r5 rotate90" /> Sign Out
                  </a> */}
                </div>

                <div className="buy " onClick={showCart}>
                  <MdShoppingCart className="MdShopping" />
                  {cartItems && cartItems.length > 0 && (
                    <div className="MdColor ">
                      <p className="MdShopText ">{cartItems.length}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* main nav */}
              <div
                className="header-nav navbar-collapse collapse justify-content-end"
                id="navbarNavDropdown"
              >
                {/* <div className="logo-header mostion">
                  <a href="/" className="logo-1">
                    <img src="/images/logo2.png" />
                  </a>
                  <a href="/" className="logo-2">
                    <img src="/images/logo2.png" />
                  </a>
                </div> */}

                <ul className="nav navbar-nav">
                  <li className=" active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                </ul>
              </div>
            </div>


          </div>



















        </div>
        {/* main header END */}
      </header>
    </>
  );
}

export default Navbar;
