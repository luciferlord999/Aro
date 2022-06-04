import React from 'react'
import { actionType } from '../../Context/reducer';
import { useStateValue } from '../StateProvider';
import { MdShoppingCart } from "react-icons/md";

function ServiceNavbar() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <>
            <header className="site-header header-transparent mo-left">
                {/* main header */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg is-fixed ">
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
    )
}

export default ServiceNavbar