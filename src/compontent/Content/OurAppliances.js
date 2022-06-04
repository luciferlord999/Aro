import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Appliances.css";
import SkeletonOurApp from "../../Skeleton/SkeletonOurApp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SliderApp from "./ourApplianceSlider/SliderApp";
import BassURl from "../../Api/Api";

function OurAppliances() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1300, itemsToShow: 3 },
  ];

  // remove items from cart

  // api call top product
  const [post, setPost] = useState(null);

  //  sketon  state and function
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      axios.get(`/web-api/all-shop-category`).then((response) => {
        setPost(response.data.data);
        setLoader(false);
      });
    }, 2000);

    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);

  // Slider Cart   product start

  const options = {
    loop: false,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: ["<img src='/images/left-arrow.webp' class='nav-buttons  owl-prevs'/>", " <img src='/images/right-arrow.webp' class='nav-buttons owl-nexts'/>"],
    autoplay: false,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1024: {
        items: 3,
      },
    },
  };

  // Slider Cart   product end









  // Show and hide buttom for product details;
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className="section-full  shadow-lg bg-white  mt-5  content-inner about-us ">
        <div className="container-fluid">
          <div className="section-head text-black text-center">
            <h2 className="box-title" style={{ fontFamily: "'Lato', sans-serif", fontWeight: "500" }}> OUR APLLIANCES</h2>
            <div className="dlab-separator bg-primary" />
          </div>
          <div className="container mx-auto mt-4">
            <div className="row">





              <OwlCarousel
                {...options}
                className="slider-items owl-theme owl-carousel  "
              >

                {

                  (
                    post?.map((data, index) => {
                      return (
                        <>
                          <div className="cardtr" key={index}>
                            <div className="card-headertr">
                              <img src={BassURl + data?.image} alt="user" />
                            </div>
                            <div className="card-bodytr">


                              <h5 className='Heading-6' style={{ textTransform: " uppercase" }}>
                                {data?.category_title}
                              </h5>




                              <div className="usertr">
                                &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;
                                <div className="user-infotr">
                                  <a href="/our-apliances/air-purifier">View </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    }))








                }




              </OwlCarousel>











            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurAppliances;
