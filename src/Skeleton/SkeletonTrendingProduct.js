import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonTrendingProduct() {
  // api call top product
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`/web-api/top-product`).then((response) => {
      setPost(response.data.data);
    });
  }, []);
  return (
    <>

    <div className="container">
      <div className="row">
        
      {post?.map((data, index) => {
        return (
          <>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6  " key={index}>
              <div
                className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated  shadow-lgs"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeIn",
                }}
              >
                <div className="product-img-action-wrap " style={{maxHeight:"278px"}}>
                  <div
                    className="product-img product-img-zoom"
                    style={{ height: "800px" }}
                  >
                    <Skeleton height="745px" />
                  </div>
                  <div className="product-action-1"></div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <h2 style={{ textTransform: "capitalize" }}>
                    <Skeleton height="25px" />
                    
                  </h2>
                </div>
                <div className="product-content-wrap">
                <Skeleton height="25px" width="100px" />
                  <h2 style={{ textTransform: "capitalize" }}>
                 
                  <div className="row">
                  <div className="col-6">
                      <Skeleton height="20px" />
                    </div>
                    <div className="col-6">
                      {" "}
                      <Skeleton height="20px" />
                    </div>

                  </div>
                   
                  </h2>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </div>




      {/*End nav-tabs*/}
    </>
  );
}

export default SkeletonTrendingProduct;
