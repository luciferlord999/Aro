import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SkeletonOurApp() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`/web-api/all-shop-category`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

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

  return (
    <>



      <SkeletonTheme
        borderRadius="0.5rem"
        duration={2}

      >
        <div className="cardtr">
          <div className="card-headertr">
            {/* <img src={BassURl + data?.image} alt="user" /> */}
            <Skeleton height={"350px"} width={"300px"} />
          </div>
          <Skeleton height={"150px"} width={"300px"} />
        </div>
        <div className="cardtr">
          <div className="card-headertr">
            {/* <img src={BassURl + data?.image} alt="user" /> */}
            <Skeleton height={"350px"} width={"300px"} />
          </div>
          <Skeleton height={"150px"} width={"300px"} />
        </div>
        <div className="cardtr">
          <div className="card-headertr">
            {/* <img src={BassURl + data?.image} alt="user" /> */}
            <Skeleton height={"350px"} width={"300px"} />
          </div>
          <Skeleton height={"150px"} width={"300px"} />
        </div>





      </SkeletonTheme>











    </>
  );
}

export default SkeletonOurApp;
