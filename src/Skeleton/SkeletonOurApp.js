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
    axios.get(`/web-api/top-product`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  const options = {
    loop: true,
    margin: 40,
    responsiveClass: true,
    dots: true,
    nav: true,
    autoplay: true,
    // autoWidth:true,
    navText: [
      "<div class='nav-button owl-prev'>‹</div>",
      "<div class='nav-button owl-next'>›</div>",
    ],

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

  return (
    <>
      <SkeletonTheme
        baseColor="#c0e8ff"
        highlightColor="rgb(93 160 241 / 38%)"
        borderRadius="0.5rem"
        duration={2}
      >
        <div className="bodss">
          <div className="containersf">


          
            <div className=" cardssf" style={{ height: "440px" }}>
              <div className="boxssf">
                <div className="contentsf">
                  <Skeleton height={"300px"} width=" 241px" margin-top="12px" />

                  <p className="text-center">
                    {" "}
                    <Skeleton height="15px" width="55px" />
                  </p>

                  <p className="text-center">
                    {" "}
                    <Skeleton height="25px" width="100px" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}

export default SkeletonOurApp;
