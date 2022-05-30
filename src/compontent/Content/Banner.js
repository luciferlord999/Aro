import React from "react";

function Banner() {
  return (
    <>
      <div className="page-content bg-white">
        <div className="dlab-bnr-inr dlab-bnr-inr-md">
          <div className="container">
            {/* <div className="dlab-bnr-inr-entry align-m dlab-home bg">
              <img src="/images/banner/bnr.png)" alt="" />
              <div className="bnr-content">
                <h2>
                  <strong>&nbsp; &nbsp; &nbsp;</strong>.
                </h2>
              </div>
            </div> */}
            <div className="search-filter filter-style1">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                  <div className="form-control">
                    <select className="bs-select-hidden">
                      <option>Select Category</option>
                      <option>Construction</option>
                      <option>Corodinator</option>
                      <option>Employer</option>
                      <option>Financial Career</option>
                      <option>Marketing</option>
                      <option>Supporting</option>
                      <option>Teaching</option>
                    </select>
                  </div>
                  <div className="input-group-prepend">
                    <button className="site-button"> Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
