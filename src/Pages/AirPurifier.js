import React, { useEffect, useState } from "react";
import { useStateValue } from "../compontent/StateProvider";
import { actionType } from "../Context/reducer";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NavbaAIR from "../compontent/Navbar/NavbaAIR";
import CartItemsAir from "./CartItemsAir";
import { useParams } from "react-router-dom";
import axios from "axios";

function AirPurifier() {
  const [{ user, cartShowA, cartItemss }, dispatch] = useStateValue();
  // const [cartMenu, setCartMenu] = useState(false);

  const showCarts = () => {
    dispatch({
      type: actionType.SET_CART_SHOWA,
      cartShowA: !cartShowA,
    });
  };

  // remove items from cart

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMSA,
      cartItemss: [],
    });

    localStorage.setItem("cartItemss", JSON.stringify([]));
  };

  // add to cart product show
  const [items, setItems] = useState([]);
  const addtocart = (data) => {
    dispatch({
      type: actionType.SET_CARTITEMSA,
      cartItemss: items,
    });

    localStorage.setItem(" cartItemss", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  // Price Sorting

  // price value range start
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
  // price value range ends

  // filter by tech start

  // filter by tech end

  const Vaccum = [
    {
      id: 1,
      name: "KENT Force Cyclonic Vacuum Cleaner",
      image: "/images/Appliance/Vaccum/1.png",
      price: "7199",
      qty: 1,
    },
    {
      id: "2",
      name: "KENT Wet and Dry Vacuum Cleaner 20L",
      image: "/images/Appliance/Vaccum/2.png",
      price: "9199",
      qty: 1,
    },
    {
      id: "3",
      name: "KENT Zoom Vacuum Cleaner",
      image: "/images/Appliance/Vaccum/2.png",
      price: "9899",
      qty: 1,
    },
  ];
  const water = [
    {
      id: 1,
      name: "KENT Automatic Water Softener 40L ",
      image: "/images/Appliance/Water/1.png",
      price: "88000",
      qty: 1,
    },
    {
      id: "2",
      name: "KENT Automatic Water Softener 8L ",
      image: "/images/Appliance/Water/2.png",
      price: "18,750",
      qty: 1,
    },
    {
      id: "3",
      name: "KENT Autosoft 25L",
      image: "/images/Appliance/Water/3.png",
      price: "79,99",
      qty: 1,
    },
    {
      id: "4",
      name: "KENT Bathroom Water Softener",
      image: "/images/Appliance/Water/4.png",
      price: "12,990",
      qty: 1,
    },
    {
      id: "5",
      name: "KENT Washing Machine Water Softener ",
      image: "/images/Appliance/Water/5.png",
      price: "18,990",
      qty: 1,
    },
    {
      id: "6",
      name: "KENT Sand Filter  ",
      image: "/images/Appliance/Water/6.png",
      price: "70,990",
      qty: 1,
    },
  ];

  const Air = [
    {
      id: 1,
      name: "KENT Alps Plus UV ",
      image: "/images/Appliance/Air/1.png",
      price: "26000",
      qty: 1,
    },
    {
      id: "2",
      name: "KENT Alps",
      image: "/images/Appliance/Air/2.png",
      price: "18,750",
      qty: 1,
    },
    {
      id: "3",
      name: "KENT Aura",
      image: "/images/Appliance/Air/3.png",
      price: "10,999",
      qty: 1,
    },
  ];

  // Api Call Product

  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`/web-api/all-shop-category`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  const category_url = useParams();

  return (
    <>
      {post?.map((data, index) => {
        if (data.category_url === category_url.category_url) {
          return (
            <>
              <NavbaAIR />
              {/* inner page banner */}
              <div className="page-content bg-white">
                {/* inner page banner */}
                <section className="main-category-section bg-air-purifier p-0">
                  <div className="banner-content banner-air-purifier">
                    <div className="row align-items-center text-center">
                      <div className="col-md-6 padding-l-10">
                        <h1 className="titles">{category_url.category_url}</h1>
                        <p className="subTitle">
                          Range of Air Purifiers to make Air Pure, Healthy &amp;
                          Pollution Free
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="bnr-img">
                          <img
                            src="https://www.kent.co.in/images/air-purifier/hepa-air-purifier.png"
                            alt="KENT Air Purifiers"
                            title="KENT Air Purifiers"
                            className="d-none d-md-block"
                            width={1900}
                            height={1100}
                          />
                          <img
                            src="https://www.kent.co.in/images/air-purifier/hepa-air-purifier-mobile.png"
                            alt
                            className="d-block d-md-none"
                            width={778}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* inner page banner END */}
                {/* contact area */}
                <div className="content-block">
                  <div className="section-full content-inner bg-white">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 ">
                          <div className="fixed">
                            <div className="listing-filter-sidebar">
                              <h4 className="title m-b30">Store By</h4>

                              <button
                                role="group"
                                type="button"
                                class="btn btn-outline-secondary d-flex flex-column mb-3"
                              >
                                Price Low to High
                              </button>
                              <button
                                type="button"
                                class="btn btn-outline-secondary"
                              >
                                Price Hight to Low
                              </button>
                            </div>
                            <div className="listing-filter-sidebar"></div>
                          </div>
                          <div className="fixed">
                            <div className="listing-filter-sidebar">
                              <h4 className="title m-b30">Filter By Price</h4>

                              <div>
                                <div className="price-input">
                                  <div className="field">
                                    <span>Min</span>
                                    <input
                                      type="number"
                                      className="input-min"
                                      defaultValue={2500}
                                    />
                                  </div>
                                  <div className="separator">-</div>
                                  <div className="field">
                                    <span>Max</span>
                                    <input
                                      type="number"
                                      className="input-max"
                                      defaultValue={7500}
                                    />
                                  </div>
                                </div>
                                <div className="slider">
                                  <div className="progress" />
                                </div>
                                <div className="range-input">
                                  <input
                                    type="range"
                                    className="range-min"
                                    min={0}
                                    max={10000}
                                    defaultValue={2500}
                                    step={100}
                                  />
                                  <input
                                    type="range"
                                    className="range-max"
                                    min={0}
                                    max={10000}
                                    defaultValue={7500}
                                    step={100}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="listing-filter-sidebar"></div>
                          </div>
                          <div className="fixed">
                            <div className="listing-filter-sidebar">
                              <h4 className="title m-b30">
                                Purification Technology
                              </h4>

                              <form className="form_1">
                                <span className="form_1_circle" />
                                <div>
                                  <input
                                    defaultChecked
                                    type="radio"
                                    name="section_1_radio"
                                    className="input"
                                    id="Pepperoni"
                                  />
                                  <label
                                    className="cradio"
                                    htmlFor="Pepperoni"
                                  />
                                  <label htmlFor="Pepperoni">
                                    RO + UV + UF + TDS Control
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="radio"
                                    name="section_1_radio"
                                    className="input"
                                    id="Mushrooms"
                                  />
                                  <label
                                    className="cradio"
                                    htmlFor="Mushrooms"
                                  />
                                  <label htmlFor="Mushrooms">
                                    RO + UF + TDS Control
                                  </label>
                                </div>
                              </form>
                            </div>
                            <div className="listing-filter-sidebar"></div>
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-4 ">
                          <div className="listing-filter m-b40">
                            <div className="d-flex">
                              <div className="mr-auto">
                                <ul className="filter m-b0">
                                  <li>
                                    <h1>{data.category_title}</h1>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center row">
                            <div className="col-md-10">
                              {Air?.map((data, index) => {
                                return (
                                  <>
                                    <div
                                      className="row p-2 shadow-lgs  mb-5 bg-white "
                                      style={{ borderRadius: "2rem" }}
                                    >
                                      <div className="col-md-3 mt-1">
                                        <img
                                          className="img-fluid img-responsive rounded product-image"
                                          src={data.image}
                                        />
                                      </div>
                                      <div className="col-md-6 mt-1">
                                        <h5>{data.name}</h5>
                                        <div className="d-flex flex-row">
                                          <div className="ratings mr-2">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                          </div>
                                          <span>310</span>
                                        </div>
                                        {/* <div className="mt-1 mb-1 spec-1">
                              <span>100% cotton</span>
                              <span className="dot" />
                              <span>Light weight</span>
                              <span className="dot" />
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div> */}
                                        {/* <div className="mt-1 mb-1 spec-1">
                              <span>Unique design</span>
                              <span className="dot" />
                              <span>For men</span>
                              <span className="dot" />
                              <span>
                                Casual
                                <br />
                              </span>
                            </div> */}
                                        <p className="text-justify text-truncate para mb-0">
                                          Lorem ipsum dolor sit amet,
                                          consectetur <br />
                                          adipisicing elit, sed do eiusm.{" "}
                                          <span>
                                            Lorem ipsum <br /> sit, amet
                                            consectetur adipisicing elit.
                                            <br /> Minima soluta iste veniam
                                            praesentium <br />
                                          </span>
                                        </p>
                                      </div>
                                      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div className="d-flex flex-row align-items-center">
                                          <h4 className="mr-1">
                                            ₹
                                            {data.price.replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ","
                                            )}{" "}
                                            /-
                                          </h4>
                                        </div>

                                        <div className="d-flex flex-column mt-4">
                                          <a href="/product-details">
                                            <motion.button
                                              whileTap={{ scale: 0.75 }}
                                              className="btn btn-primary btn-sm"
                                              type="button"
                                              style={{ width: "100px" }}
                                            >
                                              {" "}
                                              Details
                                            </motion.button>
                                          </a>
                                          <a>
                                            <motion.button
                                              whileTap={{ scale: 0.2 }}
                                              className="btn btn-outline-primary btn-sm mt-2"
                                              type="button"
                                              onClick={() =>
                                                setItems([...cartItemss, data])
                                              }
                                            >
                                              {" "}
                                              <i className="fa fa-shopping-cart" />{" "}
                                              &nbsp; Add To Cart
                                            </motion.button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>

                          {/* Pagination start */}
                          {/* Pagination END */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* contact area END */}
                {/* Explore Other Product Start */}
                {cartShowA && <CartItemsAir />}
                {/* Explore content start */}
                <section className="main-category-section p-0">
                  <div className="container-fluid">
                    <div
                      className="text-center "
                      style={{
                        margin: "60px",
                      }}
                    >
                      <h1>Features</h1>

                      {/* <h6 className="body-txt">
                Makes Water 100% pure through Multiple Purification Process{" "}
              </h6> */}
                    </div>
                    <div className="row mt-4 text-center text-centers">
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/mnemonics/100-pure-water.svg"
                              alt="Make Water 100% Pure"
                              title="Make Water 100% Pure"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">Makes Water 100% Pure</h4>
                          <p>
                            KENT RO Water Purifiers remove bacteria, viruses,
                            chemicals, and even dissolved impurities such as
                            arsenic, rust, pesticides, and fluorides to make
                            water 100% pure and healthy that meets drinking
                            water standards of IS:10500.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/new-icon/active-carbon.svg"
                              alt="Multiple Purification Process"
                              title="Multiple Purification Process"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            Multiple Purification Process
                          </h4>
                          <p className="body-txt">
                            RO purification followed by UV and UF purification
                            removes chemicals, pesticides, fluorides, dissolved
                            impurities, kills bacteria &amp; viruses to make
                            water 100% pure and healthy to drink.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/new-icon/removes-dissolved.svg"
                              alt="Removes Dissolved Impurities"
                              title="Removes Dissolved Impurities"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            Removes even Dissolved Impurities
                          </h4>
                          <p className="body-txt">
                            Boiling the water or using conventional purifiers
                            (UV) only kill bacteria and viruses but does not
                            remove dissolved impurities. However, RO Purifiers
                            also remove harmful dissolved impurities besides
                            removing bacteria and viruses.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/mnemonics/Retains-Essential-Minerals.svg"
                              alt="Retains Essential Minerals"
                              title="Retains Essential Minerals"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            Retains Essential Minerals
                          </h4>
                          <p>
                            The RO purifier from KENT comes with a TDS control
                            valve. The unique feature allows controlling the
                            desired TDS level to retain essential natural
                            minerals in the purified water.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-0 mt-md-4 text-center">
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/mnemonics/digital-display-of-purity-and-performance.svg"
                              alt="Digital Display of Purity & Performance"
                              title="Digital Display of Purity & Performance"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            Digital Display of Purity &amp; Performance
                          </h4>
                          <p className="body-txt">
                            The smart RO Purifiers has a Digital Display of
                            Purity for the convenience of the users. This
                            feature informs the users about the water purity,
                            filter's life, RO flow rate, and purified water
                            quality.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/mnemonics/Zero-Water-Wastage.svg"
                              alt="Zero Water Wastage"
                              title="Zero Water Wastage"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            Zero Water Wastage Technology
                          </h4>
                          <p>
                            Equipped with Zero Water Wastage Technology, KENT RO
                            purifiers recirculate the rejected water to the
                            overhead tank back from the purifier to the overhead
                            tank using their own pump, leading to absolutely no
                            wastage of water during the purification process.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/new-icon/amc-warrenty.svg"
                              alt="1 + 3 Years Free Service AMC"
                              title="1 + 3 Years Free Service AMC"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            1 Year Warranty + 3 Years Extended Service Free
                          </h4>
                          <p>
                            KENT Purifiers are the only purifiers to offer 3
                            Years Extended Free Service after 1 Year Warranty to
                            bring peace of mind as well as ensuring to give you
                            100% pure water during this period.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="technology-item shadow-lgs">
                          <div className="img">
                            <img
                              src="https://www.kent.co.in/images/mnemonics/Most-Trusted-and-Awarded.svg"
                              alt="Most Trusted & Awarded"
                              title="Most Trusted & Awarded"
                              width={150}
                              height={150}
                            />
                          </div>
                          <h4 className="subTitle">
                            Most Trusted &amp; Awarded
                          </h4>
                          <p>
                            KENT enjoys the trust of more than 50 Lakh satisfied
                            consumers across India. KENT's awards-studded growth
                            is a shining testimony to its phenomenal reach and
                            acceptance by global audience. KENT has received
                            many national &amp; international prestigious awards
                            &amp; recognitions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                &nbsp;
                {/* Explore content end */}
                {/* Explore Other Product End */}
                <footer className="site-footer">
                  <div className="footer-top">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
                          <div className="widget">
                            <img
                              src="images/logo.png"
                              className="m-b15"
                              alt
                              width={180}
                            />

                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Nostrum dicta quo, hic
                              distinctio delectus, et possimus rerum, a maiores
                              deserunt cupiditate recusandae nihil impedit?
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12 col-12">
                          <div className="widget border-0">
                            <h5 className="m-b30 text-white">
                              Frequently Asked Questions
                            </h5>
                            <ul className="list-2 list-line">
                              <li>
                                <a href="#;">Hotel</a>
                              </li>
                              <li>
                                <a href="#;">Restaurant</a>
                              </li>
                              <li>
                                <a href="#;">Appartment</a>
                              </li>
                              <li>
                                <a href="#;">SPA &amp; Beauty</a>
                              </li>
                              <li>
                                <a href="#;">Atuomation</a>
                              </li>
                              <li>
                                <a href="#;">Travel</a>
                              </li>
                              <li>
                                <a href="#;">How It Works</a>
                              </li>
                              <li>
                                <a href="#;">For Employers</a>
                              </li>
                              <li>
                                <a href="#;">Underwriting</a>
                              </li>
                              <li>
                                <a href="#;">Contact Us</a>
                              </li>
                              <li>
                                <a href="#;">Lending Licnses</a>
                              </li>
                              <li>
                                <a href="#;">Support</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                          <div className="widget widget_getintuch">
                            <h5 className="m-b30 text-white">Contact us</h5>
                            <ul>
                              <li>
                                <i className="ti-location-pin" />
                                <strong>address</strong> demo address #8901
                                Marmora Road Chi Minh City, Vietnam
                              </li>
                              <li>
                                <i className="ti-mobile" />
                                <strong>phone</strong>0800-123456 (24/7 Support)
                              </li>
                              <li>
                                <i className="ti-email" />
                                <strong>email</strong>info@example.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <span className="fbottom-like">
                            © 2022 Design With
                            <a className="like-btn" href="#">
                              {/* id luciferlord999 */}

                              <i className="fa fa-heart" />
                            </a>
                            By Digital Nawab
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
              {/* inner page end  */}
            </>
          );
        }
      })}
    </>
  );
}

export default AirPurifier;
