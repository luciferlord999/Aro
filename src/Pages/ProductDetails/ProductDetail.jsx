import React, { useEffect, useState } from "react";
import Navbar from "../../compontent/Navbar/Navbar";

import "./ProductDetails.css";
import Footer from "../../compontent/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footers from "./Footers";

// import CartItemsAir from "./CartItemsAir";

function PurifierDetails(props) {
  const params = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`/web-api/all-shop-category`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  return (
    <>
      {post?.map((data, index) => {
        if (data.category_url === params.name) {
          return <></>;
        }
      })}
      <Navbar />

      {/* header start */}
      <div className="page-content bg-white">
        <section className="main-category-section bg-air-purifier p-0">
          <div className="banner-air banner-content">
            <div className="row align-items-center text-center">
              <div className="col-md-6 padding-l-10">
                <h1 className="title">
                  KENT Alps<sup>+</sup> UV Air Purifier
                </h1>
                <h2 className="subTitle">
                  An Advanced Air Purifier Provides You Clean and Pure Air With
                  4 Stages Filtration Technology
                </h2>
              </div>
              <div className="col-md-6">
                <div className="bnr-img mt-0">
                  <img
                    src="/images/Appliance/Air/kent.png"
                    alt="KENT Alps+ UV Air Purifier"
                    title="KENT Alps+ UV Air Purifier"
                    className="d-none d-md-block"
                    width={2112}
                    height={1400}
                  />
                  <img
                    //   src="https://www.kent.co.in/images/air/kent-alps-plus-uv-mobile.png"
                    alt
                    className="d-block d-md-none"
                    width={828}
                    height={905}
                  />
                  <img
                    id="image"
                    //   src="https://www.kent.co.in/images/enlarge/kent-alps-plus-uv-enlarge-view.png"
                    className="d-none"
                    alt="KENT Alps Plus UV Air Purifier"
                    title="KENT Alps Plus UV Air Purifier"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="card ">
            <div
              className="container  shadow-lgs"
              style={{
                borderRadius: "50px",
              }}
            >
              <div className="wrapper row">
                <div className="preview col-md-5">
                  <div
                    className="preview-pic tab-content"
                    style={{ width: "30rem" }}
                  >
                    <div className="tab-pane active" id="pic-1">
                      <img src="/images/Appliance/Air/1.png" />
                    </div>
                    <div className="tab-pane" id="pic-2">
                      <img src="/images/Appliance/Air/1.png" />
                    </div>
                    <div className="tab-pane" id="pic-3">
                      <img src="/images/Appliance/Air/1.png" />
                    </div>
                    <div className="tab-pane" id="pic-4">
                      <img src="/images/Appliance/Air/1.png" />
                    </div>
                    <div className="tab-pane" id="pic-5">
                      <img src="/images/Appliance/Air/1.png" />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src="/images/Appliance/Air/1.png" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img src="/images/Appliance/Air/1.png" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-3" data-toggle="tab">
                        <img src="/images/Appliance/Air/1.png" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-4" data-toggle="tab">
                        <img src="/images/Appliance/Air/1.png" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-5" data-toggle="tab">
                        <img src="/images/Appliance/Air/1.png" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details col-md-7">
                  <h3 className="product-title">KENT Alps Plus UV</h3>
                  <div className="rating">
                    <div className="rate">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half" />
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p className="product-description">
                    There are bacteria, viruses, and other invisible pollutants
                    trapped inside, which are not removed by just cleaning.
                    Presenting, KENT Alps+ UV Air Purifier, an advanced Air
                    Purifier with UV LED and purity indicator. The air purifier
                    is designed to solve your air quality concerns completely.
                    It filters out air pollutants and bacteria, viruses, and
                    germs from the polluted indoor air, and offers only cleaner,
                    fresher, and breathable air for your and family’s
                    well-being. The advanced HEPA filter removes 2.5 Particulate
                    Matter and uses 3-step mechanism for removing 99.97% air
                    pollutants, more than 0.3 microns in size.
                  </p>
                  <h4 className="price">
                    Price: <span>₹26000 /-</span>
                  </h4>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>

                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      BUY NOW
                    </button>{" "}
                    &nbsp;
                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-shopping-cart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        <section className="bg-light" id="features">
          <div className="container">
            <div className="text-center">
              <h1
                className="title"
                style={{ fontSize: "55", fontWeight: "900" }}
              >
                FEATURES
              </h1>
              {/* <h6 class="">Makes water pure & keeps your family healthy</h6> */}
            </div>
            <div className="row mt-4 text-center">
              <div className="col-md-4">
                <div className="technology-item shadow-lgs">
                  <div className="img">
                    <img
                      src="https://www.kent.co.in/images/mnemonics/UV-LED-That-Kills-Bacteria-&-Viruses.svg"
                      alt="UV LED That Kills Bacteria & Viruses"
                      title="UV LED That Kills Bacteria & Viruses"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h4 className="subTitle">
                    UV LED That Kills Bacteria &amp; Viruses
                  </h4>
                  <p>
                    UV-LEDS emits a powerful light (also found in the sunlight
                    spectrum) that creates such an environment where bacteria,
                    viruses, and germs cannot live. Alps+ UV Air Purifier has
                    this UV LED placed after the filters that kills all bacteria
                    and viruses as the air passes through it. The process not
                    
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="technology-item shadow-lgs">
                  <div className="img">
                    <img
                      src="https://www.kent.co.in/images/mnemonics/HEPA-Technology.svg"
                      alt="Highly Efficient HEPA Technology"
                      title="Highly Efficient HEPA Technology"
                      width={150} 
                      height={150}
                    />
                  </div>
                  <h4 className="subTitle">Highly Efficient HEPA Technology</h4>
                  <p>
                    It removes Particulate Matter (PM 2.5) with antibacterial
                    coated HEPA filter. The technology helps filter out 99.97%
                    air pollutants, more than 0.3 microns in size, via a 3-stage
                    mechanism. First is the primary filter for removing large
                    
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="technology-item shadow-lgs">
                  <div className="img">
                    <img
                      src="https://www.kent.co.in/images/mnemonics/Smart-Air-Purifier.svg"
                      alt="Smart Air Purifier"
                      title="Smart Air Purifier"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h4 className="subTitle">Smart Air Purifier </h4>
                  <p>
                    Apart from cleaner air, KENT Alps+ UV Air Purifier ensures
                    you are always in a safer zone. Therefore, its features like
                    filter change indicator and intelligent air quality
                    monitoring will timely alert you when the filter needs to be
                    changed and what quality of air you’re breathing right now.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-0 mt-md-4 text-center">
              <div className="col-md-4">
                <div className="technology-item shadow-lgs">
                  <div className="img">
                    <img
                      src="https://www.kent.co.in/images/mnemonics/User-Friendly-Design.svg"
                      alt="User Friendly Design"
                      title="User Friendly Design "
                      width={150}
                      height={150}
                    />
                  </div>
                  <h4 className="subTitle">User Friendly Design</h4>
                  <p>
                    The settings on Alps+ UV Air Purifier can be done on a touch
                    of button. You are provided with different timer settings of
                    2 Hours (Press Once), 4 Hours (Press Twice), and 6 Hours
                    (Press Thrice). Also, there is a button that helps control
                    the speed – Press Once for Low, Twice for Medium, and Thrice
                    for High.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="technology-item shadow-lgs">
                  <div className="img">
                    <img
                      src="https://www.kent.co.in/images/mnemonics/Cleaner-Air-EVERY-TIME.svg"
                      alt="Cleaner Air EVERY TIME"
                      title="Cleaner Air EVERY TIME"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h4 className="subTitle">Cleaner Air EVERY TIME</h4>
                  <p>
                    This air purifier ensures a high CADR (Clean Air Delivery
                    Rate) of 400mᵌ/hr. Its high purifying capacity can instantly
                    purify air in the room. Also, it is suitable for a room of
                    area up to 430 sq.ft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        &nbsp;
        {/* Our Portfolio */}
        <div className="section-full content-inner bg-gray">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="box-title">Product Review</h2>
              <div className="dlab-separator bg-primary" />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div
                    id="owl-demo"
                    className="testimonial-one owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3 owl-dots-primary-big"
                  >
                    <div className="item shadow-lgs">
                      <div className="client-box">
                        <div className="client-detail">
                          <div className="client-img">
                            <img
                              src="http://3.110.38.250/assets/uploads/testimonial//thumbnail_images/1647429450IMG_20170106_152309.jpg"
                              width={100}
                              height={100}
                              alt
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="client-name">Ammar Khan</h5>
                            <span>Business Man</span>
                            <div className="rate">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half" />
                            </div>
                          </div>
                        </div>
                        <div className="client-info-bx">
                          <p>
                            Vestibulum orci felis, ullamcorper non condimentum
                            non, ultrices ac nunc. Mauris non ligula suscipit,
                            vulputate mi accumsan, dapibus felis. Nullam sed
                            sapien dui. Nulla auctor sit amet sem non porta.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item shadow-lgs">
                      <div className="client-box">
                        <div className="client-detail">
                          <div className="client-img">
                            <img
                              src="http://3.110.38.250/assets/uploads/testimonial//thumbnail_images/16474288985.jpg"
                              width={100}
                              height={100}
                              alt
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="client-name">Puneet Sukla</h5>
                            <span>Business Man</span>
                            <div className="rate">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        <div className="client-info-bx">
                          <p>
                            Vestibulum orci felis, ullamcorper non condimentum
                            non, ultrices ac nunc. Mauris non ligula suscipit,
                            vulputate mi accumsan, dapibus felis. Nullam sed
                            sapien dui. Nulla auctor sit amet sem non porta.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item shadow-lgs">
                      <div className="client-box">
                        <div className="client-detail">
                          <div className="client-img">
                            <img
                              src="http://3.110.38.250/assets/uploads/testimonial//thumbnail_images/16474286892.jpg"
                              width={100}
                              height={100}
                              alt
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="client-name">Digital Nawab</h5>
                            <span>Business Man</span>
                            <div className="rate">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half" />
                            </div>
                          </div>
                        </div>
                        <div className="client-info-bx">
                          <p>
                            Vestibulum orci felis, ullamcorper non condimentum
                            non, ultrices ac nunc. Mauris non ligula suscipit,
                            vulputate mi accumsan, dapibus felis. Nullam sed
                            sapien dui. Nulla auctor sit amet sem non porta.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Portfolio END */}
        &nbsp;
        <Footers />
      </div>
      {/* header end */}
    </>
  );
}

export default PurifierDetails;
