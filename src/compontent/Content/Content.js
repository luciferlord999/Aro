import React, { useState, useEffect } from "react";
import ServiceSlider from "./ServiceSlider";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";

import Item from "./Item";
import Carousel from "react-elastic-carousel";
import Caro from "./Caro";
import Testimonial from "../The Modal/Testimonial/Testimonial";
import "./Rating.css";
import "../The Modal/Modals.css";
import { useStateValue } from "../StateProvider";
import { actionType } from "../../Context/reducer";
import Products from "./Products";
import OurAppliance from "./OurAppliances";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import BassURl from "../../Api/Api";
import IconSkeleton from "../../Skeleton/IconSkeleton";

function Content() {
  // Modal

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // *****************************************

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [datas, setdata] = useState([]);

  //  Appliances Api Call
  // useEffect(() => {
  //   const getdata = async () => {
  //     const res = await fetch("/3.110.38.250/web-api/all-shop-category");
  //     const getdata = await res.json();

  //     setdata(await getdata);
  //   };
  //   getdata();
  //   // console.log(datas.code)
  // }, []);

  // testimonial api call
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/web-api/all-testimonial`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  // *************** Add to cart **********

  const [rating, setRating] = useState(0);

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  // add to cart product show
  const [items, setItems] = useState([]);
  const addtocart = (hel) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });

    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1300, itemsToShow: 3 },
  ];

  const ser = [
    {
      id: "1",
      name: "Salon",
      img: "images/gallery/1.webp",
    },
    {
      id: "2",
      name: "Hair Services ",
      img: "images/gallery/2.webp",
    },
    {
      id: "3",
      name: "Women's Therapies",
      img: "images/gallery/3.webp",
    },
    {
      id: "4",
      name: "Salon For Men",
      img: "images/gallery/4.webp",
    },
    {
      id: "5",
      name: "Men's Therapies",
      img: "images/gallery/5.webp",
    },
    {
      id: "6",
      name: "Geyser",
      img: "images/gallery/6.webp",
    },
  ];

  // all serrvice api call here

  //  sketon  state and function
  const [posets, setPosets] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      axios.get(`/web-api/all-service-category`).then((response) => {
        setPosets(response.data.data);
        setLoader(false);
      });
    }, 2000);

    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Add to cart Product dynamic

  return (
    <>
      <div className="content-block">

        {/* <div className="hero-categories fl-wrap shadow bg-white rounded-3"><h1>hello</h1></div> */}
        <div className="Icon_width">

          <div
            className="category-bx  bg-white shadow-lg p-3 mb-5 bg-white rounded"
            style={{ marginTop: "160px", height: "220px" }}
          >
            {!loader ? (
              posets?.map((get, index) => {
                return (
                  <>
                    <a
                      href="listing-left-sidebar.html"
                      className="category"
                      key={index}
                    >
                      <img src={BassURl + get.service_img} alt="" />
                      <p>{get.service_title}</p>
                    </a>
                  </>
                );
              })
            ) : (
              <IconSkeleton />
            )}
          </div>

        </div>





        {/* Featured Destinations */}
        <div className="section-full bg-white mt-10 content-inner ">
          <div className="container ">
            <div
              className="section-head text-black text-center "
              style={{ marginTop: "35px" }}
            >
              <h2 className="box-title"> OUR SERVICE </h2>
              <div className="dlab-separator bg-primary" />
            </div>
            <ServiceSlider />
          </div>
        </div>
        {/* Featured Destinations End */}
        {/* Our Services */}

        <OurAppliance />

        {/* <Appliances/> */}

        {/* Our Services */}
        {/* Why Choose Us */}

        {/* Why Chose Us End */}
        {/* Our Portfolio */}

        {/* Our Portfolio END */}
        {/* Featured Destinations */}
        <Products />

        {/* Featured Destinations End */}
        <Caro />

        {/* Featured Destinations */}

        {/* Featured Destinations End */}
      </div>

      <section
        className="gradient-bg hidden-section  shadow-lg p-3 mb-5 bg-white rounded"
        data-scrollax-parent="true"
      >
        <div class="image">
          <div className="container big-container">
            <div className="row">
              <div className="col-md-6">
                <div className="colomn-text pad-top-column-text fl-wrap">
                  <div className="colomn-text-title">
                    <h3>OUR APP AVAILABLE NOW </h3>
                    <p>
                      In ut odio libero, at vulputate urna. Nulla tristique mi a
                      massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                      commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer
                      adipiscing elit.
                    </p>
                    <a className=" down-btn color3-bg">
                      {/* <i className="fa fa-apple" aria-hidden="true"/> */}
                      <div className="i">
                        <FaApple />
                      </div>
                      Apple Store
                    </a>
                    <a className=" down-btn color3-bg">
                      <div className="i">
                        <FaGooglePlay />
                      </div>
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="collage-image">
                  <img
                    src="/images/water.png"
                    className="main-collage-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="gradient-bg-figure"
            style={{ right: "-30px", top: "10px" }}
          />
          <div
            className="gradient-bg-figure"
            style={{ left: "-20px", bottom: "30px" }}
          />
          <div
            className="circle-wrap"
            style={{
              left: "270px",
              top: "120px",
              transform: "translateZ(0px) translateY(48.5673px)",
            }}
            data-scrollax="properties: { translateY: '-200px' }"
          >
            <div className="circle_bg-bal circle_bg-bal_small" />
          </div>
          <div
            className="circle-wrap"
            style={{
              right: "420px",
              bottom: "-70px",
              transform: "translateZ(0px) translateY(-36.4255px)",
            }}
            data-scrollax="properties: { translateY: '150px' }"
          >
            <div className="circle_bg-bal circle_bg-bal_big" />
          </div>
          <div
            className="circle-wrap"
            style={{
              left: "420px",
              top: "-70px",
              transform: "translateZ(0px) translateY(-24.2837px)",
            }}
            data-scrollax="properties: { translateY: '100px' }"
          >
            <div className="circle_bg-bal circle_bg-bal_big" />
          </div>
          <div className="circle-wrap" style={{ left: "40%", bottom: "-70px" }}>
            <div className="circle_bg-bal circle_bg-bal_middle" />
          </div>
          <div className="circle-wrap" style={{ right: "40%", top: "-10px" }}>
            <div
              className="circle_bg-bal circle_bg-bal_versmall"
              data-scrollax="properties: { translateY: '-350px' }"
              style={{ transform: "translateZ(0px) translateY(84.9928px)" }}
            />
          </div>
          <div className="circle-wrap" style={{ right: "55%", top: "90px" }}>
            <div
              className="circle_bg-bal circle_bg-bal_versmall"
              data-scrollax="properties: { translateY: '-350px' }"
              style={{ transform: "translateZ(0px) translateY(84.9928px)" }}
            />
          </div>
        </div>
      </section>

      <Testimonial />
      <div className="section-full content-inner bg-gray shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="box-title">TESTIMONIAL</h2>
            <div className="dlab-separator bg-primary" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div
                  id="owl-demo"
                  className="testimonial-one owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3 owl-dots-primary-big"
                >
                  <div className="item shadow-lgs">
                    <div className="client-box">
                      <div className="client-detail">
                        <div className="client-img">
                          <img
                            src="http://3.110.38.250/assets/uploads/testimonial//thumbnail_images/1647429450IMG_20170106_152309.jpg"
                            width={100}
                            height={100}
                            alt
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="client-name">Ammar Khan</h5>
                          <span>Business Man</span>
                          <div className="rate">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half" />
                          </div>
                        </div>
                      </div>
                      <div className="client-info-bx">
                        <p>
                          Vestibulum orci felis, ullamcorper non condimentum
                          non, ultrices ac nunc. Mauris non ligula suscipit,
                          vulputate mi accumsan, dapibus felis. Nullam sed
                          sapien dui. Nulla auctor sit amet sem non porta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item shadow-lgs">
                    <div className="client-box">
                      <div className="client-detail">
                        <div className="client-img">
                          <img
                            src="http://3.110.38.250/assets/uploads/testimonial//thumbnail_images/16474288985.jpg"
                            width={100}
                            height={100}
                            alt
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="client-name">Puneet Sukla</h5>
                          <span>Business Man</span>
                          <div className="rate">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="client-info-bx">
                        <p>
                          Vestibulum orci felis, ullamcorper non condimentum
                          non, ultrices ac nunc. Mauris non ligula suscipit,
                          vulputate mi accumsan, dapibus felis. Nullam sed
                          sapien dui. Nulla auctor sit amet sem non porta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item shadow-lgs">
                    <div className="client-box">
                      <div className="client-detail">
                        <div className="client-img">
                          <img
                            src="http://3.110.38.250/assets/uploads/testimonial//thumbnail_images/16474286892.jpg"
                            width={100}
                            height={100}
                            alt
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="client-name">Digital Nawab</h5>
                          <span>Business Man</span>
                          <div className="rate">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half" />
                          </div>
                        </div>
                      </div>
                      <div className="client-info-bx">
                        <p>
                          Vestibulum orci felis, ullamcorper non condimentum
                          non, ultrices ac nunc. Mauris non ligula suscipit,
                          vulputate mi accumsan, dapibus felis. Nullam sed
                          sapien dui. Nulla auctor sit amet sem non porta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
