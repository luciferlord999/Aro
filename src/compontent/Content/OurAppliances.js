import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Appliances.css";
import SkeletonOurApp from "../../Skeleton/SkeletonOurApp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SliderApp from "./ourApplianceSlider/SliderApp";

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
    }, 1000);

    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);

  // Slider Cart   product start

  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    autoplay: true,

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
    },
  };

  // Slider Cart   product end

  // Show and hide buttom for product details;
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className="section-full bg-gray content-inner about-us shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <div className="section-head text-black text-center">
            <h2 className="box-title"> OUR APLLIANCES</h2>
            <div className="dlab-separator bg-primary" />
          </div>
          <div className="container mx-auto mt-4">
            <div className="row">
              <div className="bodysf">
                <div className="containersf">
                  <OwlCarousel
                    {...options}
                    className="slider-items owl-theme owl-carousel  "
                  >
                    {post?.map((data, index) => {
                      return (
                        <>
                          <div className=" cardsf item" key={index}>
                            <div className="boxsf shadow-lgs">
                              <div className="contentsf">
                                <img
                                  src={`http://3.110.38.250/${data.image}`}
                                  alt=""
                                />
                                <p className="text-center prosx">
                                  {data.category_title}
                                </p>
                                <Link
                                  to={`/our-apliances/${data.category_url}`}
                                >
                                  View{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </OwlCarousel>

                  {/*                
                  {!loader ? (
                    post?.map((data, index) => {
                      return (
                        <>
                          <div className=" cardsf" key={index}>
                            <div className="boxsf shadow-lgs">
                              <div className="contentsf">
                                <img
                                  src={`http://3.110.38.250/${data.image}`}
                                  alt=""
                                />
                                <p className="text-center prosx">
                                  {data.category_title}
                                </p>
                                <Link
                                  to={`/our-apliances/${data.category_url}`}
                                >
                                  View{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <SkeletonOurApp />
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurAppliances;
