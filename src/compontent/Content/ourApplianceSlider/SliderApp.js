import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonOurApp from "../../../Skeleton/SkeletonOurApp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderApp() {
  // api call
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
    }, 3000);

    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);
  return (
    <>
     
    </>
  );
}

export default SliderApp;
