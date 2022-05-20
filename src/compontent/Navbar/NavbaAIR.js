import React from "react";
import { useStateValue } from "../StateProvider";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { actionType } from "../../Context/reducer";

function NavbaAIR() {
  const [{ user, cartShowA, cartItemss }, dispatch] = useStateValue();





//   Show CARTS
  const showCarts = () => {
    dispatch({
      type: actionType.SET_CART_SHOWA,
      cartShowA: !cartShowA,
    });
  };

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
                  <img src="/images/logo2.png" alt />
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
              <div className="extra-nav">
                <div className="extra-cell">
                  <a href="signup" className="site-button-link white">
                    <i className="ti-import m-r5 rotate90" /> Sign In
                  </a>
                  <a href="/signup" className="site-button radius-xl m-l10">
                    <i className="fa fa-plus m-r5" /> Sign Up
                  </a>
                </div>

                <div className="buys " onClick={() => showCarts()}>
                  <MdShoppingBasket className="MdShoppings" />
                  {cartItemss && cartItemss.length > 0 && (
                    <div className="MdColors ">
                      <p className="MdShopText ">{cartItemss.length}</p>
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

export default NavbaAIR;
