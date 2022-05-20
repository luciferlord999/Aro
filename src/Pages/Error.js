import React from "react";
import Navbar from "../compontent/Navbar/Navbar";
import Banner from "../compontent/Content/Banner";

function Error() {
  return (
    <>
      <Navbar />
      <div
        className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle"
        style={{ backgroundImage: "url(images/banner/bnr.png)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            {/* <h1 className="text-white">Contact Us</h1> */}
            {/* <p>Find awesome places, bars, restaurants &amp; activities.</p> */}
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <a href="/">Home</a>
                </li>
               
              </ul>
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>

      <div className="section-full content-inner-2">
        <div className="container">
          <div className>
            <div className="error-page">
              <span className="error-no">404</span>
              <span className="error-title">
                Page <br /> Not <br /> Found
              </span>
            </div>
            <div className="error-page-search"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
