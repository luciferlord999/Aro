import React from "react";

function Footers() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
                <div className="widget">
                  <img
                    src="/images/logo.png"
                    className="m-b15"
                    alt
                    width={180}
                  />

                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dicta quo, hic distinctio delectus, et possimus rerum, a maiores deserunt cupiditate recusandae nihil impedit?</p>

                  
                 
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12 col-12">
                <div className="widget border-0">
                  <h5 className="m-b30 text-white">
                  PRODUCTS
                  </h5>
                  <ul className="list-1 list-line">
                    <li>
                      <a href="#;">Water Purifiers</a>
                    </li>
                    
                    <li>
                      <a href="#;">Water Softeners</a>
                    </li>
                    <li>
                      <a href="#;">Kitchen Appliances</a>
                    </li>
                    <li>
                      <a href="#;">Air Purifiers</a>
                    </li>
                    <li>
                      <a href="#;">Vacuum Cleaners</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div className="widget widget_getintuch">
                  <h5 className="m-b30 text-white">Contact us</h5>
                  <ul>
                    <li>
                      <i className="ti-location-pin" />
                      <strong>address</strong> demo address #8901 Marmora Road
                      Chi Minh City, Vietnam
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <strong>phone</strong>0800-123456 (24/7 Support)
                    </li>
                    <li>
                      <i className="ti-email" />
                      <strong>email</strong>info@example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <span className="fbottom-like">
                  © 2022 Design With
                  <a className="like-btn" href="#">

                  {/* id luciferlord999 */}



                    <i className="fa fa-heart" />
                  </a>
                  By Digital Nawab
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footers;
