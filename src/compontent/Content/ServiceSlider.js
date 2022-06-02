import React, { useState, useEffect, useCallback, useRef } from "react";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { FakeData } from "../../FakeData/FakeData";
// import ScrollTop from "./ScrollTop/ScrollTop";
import "./Models.css";

import $ from "jquery";
import { Link } from "react-router-dom";

//Owl Carousel Settings
const options = {
  margin: 40,
  responsiveClass: true,
  dots: true,
  nav: true,
  loop: true,
  autoplay: true,
  // autoWidth:true,

  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
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
// image api call
const img = [
  {
    id: "1",
    name: "AC-Service",
    image:
      "/images/slider/4.webp",
  },
  {
    id: "2",
    name: "Handy-Man",
    image:
      "/images/slider/1.webp",
  },
  {
    id: "3",
    name: "Furniture-Assembly",
    image:
      "/images/slider/2.webp",
  },
  {
    id: "4",
    name: "Plumber",
    image:
      "/images/slider/3.webp",
  },
  {
    id: "5",
    name: "Lown-Mowing",
    image:
      "/images/slider/3.webp",
  },

  // {
  //   id: "7",
  //   name: "Lown Mowing",
  //   image:
  //     "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
  // },
];
function ServiceSlider(props) {
  const commentSection = useRef(null);

  const { product } = props;

  //  jquery in react end

  return (
    <div>
      <section className="mb-25">
        <div className="container">
          <div className="row">
            <OwlCarousel className="slider-items owl-carousel " {...options}>
              {img.map((pic, index) => {
                return (
                  <>
                    <div className="col-log-4" style={{
                      boxShadow: " 0 2px 5px 0 rgb(0 0 0 / 42%), 0 2px 10px 0 rgb(0 0 0 / 39%)"
                    }}>
                      <div
                        className="item "
                        style={{ width: "500px !important" }}
                        key={index}
                      >
                        <div
                          className="backImg"
                          style={{ visibility: "visible" }}
                        >
                          <img src={pic.image} />

                          <div className="backText">
                            <h4
                              style={{
                                textTransform: "capitalize",
                                fontFamily: "Quicksand, sans-serif",
                              }}
                            >
                              {pic.name}
                            </h4>

                            <div
                              data-toggle="modal"
                              data-target={"#modal-fullscreen-xl" + index}
                              className="btns btn-xs"
                            >
                              <Link to={`/product/${pic.name}`}>Book Now</Link>

                              <i class="fa fa-arrow-small-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSlider;
