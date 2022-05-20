import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../compontent/Navbar/Navbar";
import Footers from "../Pages/ProductDetails/Footers";
import BassURl from "../Api/Api";

function TopTredingProductScreen(props) {
  const param = useParams();

  //  Product Api Call

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`/web-api/top-product`).then((response) => {
      setPost(response.data.data);
    });
  }, []);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios.get(`web-api/all-testimonial`).then((response) => {
      setComment(response.data.data);
    });
  }, []);

  const regex = /(<([^>]+)>)/gi;

  return (
    <>
      {post?.map((data, index) => {
        if (data.product_url === param.product_url) {
          return (
            <>
              <Navbar />

              {/* header start */}
              <div className="page-content bg-white" key={index}>
                <section
                  className="breadcrumb-area pt-300 pb-100"
                  style={{
                    backgroundImage: 'url("/images/bg5.png")',
                    filter: "drop-shadow(5px 8px 13px #107cc4)",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <div className="breadcrumb-content">
                          <h1> &nbsp; &nbsp;</h1>

                          <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="container">
                  <div
                    className="card "
                    style={{ filter: "drop-shadow(5px 8px 13px #107cc4)" }}
                  >
                    <div
                      className="container "
                      style={{
                        borderRadius: "50px",
                      }}
                    >
                      <div className="wrapper row">
                        <div className="preview col-md-5">
                          <div
                            className="preview-pic tab-content"
                            style={{ width: "20rem" }}
                          >
                            <div className="tab-pane active" id="pic-1">
                              <img src={`${BassURl + data.product_image}`} />
                            </div>
                            <div className="tab-pane" id="pic-2">
                              <img src={`${BassURl + data.product_image}`} />
                            </div>
                            <div className="tab-pane" id="pic-3">
                              <img src={`${BassURl + data.product_image}`} />
                            </div>
                            <div className="tab-pane" id="pic-4">
                              <img src={`${BassURl + data.product_image}`} />
                            </div>
                            <div className="tab-pane" id="pic-5">
                              <img src={`${BassURl + data.product_image}`} />
                            </div>
                          </div>
                          <ul className="preview-thumbnail nav nav-tabs">
                            <li className="active">
                              <a data-target="#pic-1" data-toggle="tab">
                                <img src={`${BassURl + data.product_image}`} />
                              </a>
                            </li>
                            <li>
                              <a data-target="#pic-2" data-toggle="tab">
                                <img src={`${BassURl + data.product_image}`} />
                              </a>
                            </li>
                            <li>
                              <a data-target="#pic-3" data-toggle="tab">
                                <img src={`${BassURl + data.product_image}`} />
                              </a>
                            </li>
                            <li>
                              <a data-target="#pic-4" data-toggle="tab">
                                <img src={`${BassURl + data.product_image}`} />
                              </a>
                            </li>
                            <li>
                              <a data-target="#pic-5" data-toggle="tab">
                                <img src={`${BassURl + data.product_image}`} />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="details col-md-7">
                          <h3
                            className="product-title"
                            style={{ fontFamily: "poppins,sans-serif" }}
                          >
                            {data.product_title.slice(0, 30)}
                          </h3>
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
                            {data.product_description.replace(regex, "").slice(0, 500)}
                          </p>
                          <h4 className="price">
                            Price:{" "}
                            <span>
                              ₹{" "}
                              {data.product_price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                              /-
                            </span>
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
                            <button
                              className="like btn btn-default"
                              type="button"
                            >
                              <span className="fa fa-shopping-cart" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                &nbsp;
                <section className="section-padding">
                  <div className="container">
                    <div className="row mt-30">
                      <div className="product-details-tab">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="description-tab"
                              data-toggle="tab"
                              data-target="#description"
                              role="tab"
                              aria-controls="description"
                              aria-selected="true"
                            >
                              Description
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="info-tab"
                              data-toggle="tab"
                              data-target="#info"
                              role="tab"
                              aria-controls="info"
                              aria-selected="false"
                            >
                              FEATURES
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="review-tab"
                              data-toggle="tab"
                              data-target="#review"
                              role="tab"
                              aria-controls="review"
                              aria-selected="false"
                            >
                              Review
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="description"
                            role="tabpanel"
                            aria-labelledby="description-tab"
                          >
                            <div className="pd-tab-item">
                              <div className="pd-description">
                                <p>
                                  Pellentesque aliquet, sem eget laoreet
                                  ultrices, ipsum metus feugiat sem, quis
                                  fermentum turpis eros eget velit. Donec ac
                                  tempus ante. Fusce ultricies massa massa.
                                  Fusce aliquam, purus eget sagittis vulputate,
                                  sapien libero hendrerit est, sed commodo augue
                                  nisi non neque. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Sed tempor, lorem
                                  et placerat vestibulum, metus nisi posuere
                                  nisl, in accumsan elit odio quis mi. Cras
                                  neque metus, consequat et blandit et, luctus a
                                  nunc. Etiam gravida vehicula tellus, in
                                  imperdiet ligula euismod eget. One
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam fringilla augue nec est
                                  tristique auctor. Donec non est at libero
                                  vulputate rutrum. Morbi ornare lectus quis
                                  justo gravida semper. Nulla tellus mi,
                                  vulputate adipiscing cursus eu, suscipit id
                                  nulla.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam fringilla augue nec est
                                  tristique auctor. Donec non est at libero
                                  vulputate rutrum. Morbi ornare lectus quis
                                  justo gravida semper. Nulla tellus mi,
                                  vulputate adipiscing cursus eu, suscipit id
                                  nulla.Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam fringilla augue nec est
                                  tristique auctor. Donec non est at libero
                                  vulputate rutrum. Morbi ornare lectus quis
                                  justo gravida semper. Nulla tellus mi,
                                  vulputate adipiscing cursus eu, suscipit id
                                  nulla.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="info"
                            role="tabpanel"
                            aria-labelledby="info-tab"
                          >
                            <div className="pd-tab-item">
                              <div className="pd-additional-info table-responsive">
                                <section className="bg-light" id="features">
                                  <div className="container">
                                    <div className="text-center">
                                      <h1
                                        className="title"
                                        style={{
                                          fontSize: "55",
                                          fontWeight: "900",
                                        }}
                                      >
                                        FEATURES
                                      </h1>
                                      {/* <h6 class="">Makes water pure & keeps your family healthy</h6> */}
                                    </div>
                                    <div className="row mt-4 text-center">
                                      <div className="col-md-4">
                                        <div className="technology-item shadow-lgs">
                                          <div
                                            className="img"
                                            style={{ maxWidth: " 140px" }}
                                          >
                                            <img
                                              src="https://www.kent.co.in/images/mnemonics/UV-LED-That-Kills-Bacteria-&-Viruses.svg"
                                              alt="UV LED That Kills Bacteria & Viruses"
                                              title="UV LED That Kills Bacteria & Viruses"
                                              width={150}
                                              height={150}
                                            />
                                          </div>
                                          <h4 className="subTitle">
                                            UV LED That Kills Bacteria &amp;
                                            Viruses
                                          </h4>
                                          <p>
                                            UV-LEDS emits a powerful light (also
                                            found in the sunlight spectrum) that
                                            creates such an environment where
                                            bacteria, viruses, and germs cannot
                                            live. Alps+ UV Air Purifier has this
                                            UV LED placed after the filters that
                                            kills all bacteria.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="technology-item shadow-lgs">
                                          <div
                                            className="img"
                                            style={{ maxWidth: " 140px" }}
                                          >
                                            <img
                                              src="https://www.kent.co.in/images/mnemonics/HEPA-Technology.svg"
                                              alt="Highly Efficient HEPA Technology"
                                              title="Highly Efficient HEPA Technology"
                                              width={150}
                                              height={150}
                                            />
                                          </div>
                                          <h4 className="subTitle">
                                            Highly Efficient HEPA Technology
                                          </h4>
                                          <p>
                                            It removes Particulate Matter (PM
                                            2.5) with antibacterial coated HEPA
                                            filter. The technology helps filter
                                            out 99.97% air pollutants, more than
                                            0.3 microns in size, via a 3-stage
                                            mechanism. First is the primary
                                            filter for removing large particles
                                            from the polluted indoor air.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="technology-item shadow-lgs">
                                          <div
                                            className="img"
                                            style={{ maxWidth: " 140px" }}
                                          >
                                            <img
                                              src="https://www.kent.co.in/images/mnemonics/Smart-Air-Purifier.svg"
                                              alt="Smart Air Purifier"
                                              title="Smart Air Purifier"
                                              width={150}
                                              height={150}
                                            />
                                          </div>
                                          <h4 className="subTitle">
                                            Smart Air Purifier{" "}
                                          </h4>
                                          <p>
                                            Apart from cleaner air, KENT Alps+
                                            UV Air Purifier ensures you are
                                            always in a safer zone. Therefore,
                                            its features like filter change
                                            indicator and intelligent air
                                            quality monitoring will timely alert
                                            you when the filter needs to be
                                            changed and what quality of air
                                            you’re breathing right now.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="review"
                            role="tabpanel"
                            aria-labelledby="review-tab"
                          >
                            <div className="pd-tab-item"  
                              >
                              <h3 className="review-title">{comment.length +" Customer Review"}</h3>
                              <ul>
                                {/* Single */}

                                {comment?.map((data, index) => {
                                  return (
                                    <>

                                  
                                      <li className="review-single">
                                        <img
                                          src={`${BassURl+data?.image}`}
                                          alt="avatar"

                                          style={{borderRadius:"50px"}}
                                        />
                                        <div className="content">
                                          <div className="review-info">
                                            <h5>{data?.name}</h5>
                                            <small> {data?.date_time} </small>
                                          </div>
                                          <div class="rating">
                                            <div class="rate">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star-half"></i>
                                            </div>
                                            <span class="review-no">
                                              41 reviews
                                            </span>
                                          </div>
                                          <div className="revie-con">
                                            <p>
                                              Lorem Ipsumin gravida nibh vel
                                              velit auctor aliquet. Aenean
                                              sollicitudin, lorem quis bibendum
                                              auctor, nisi elit consequat ipsum,
                                              nec sagittis sem nibh id elit.
                                              Duis sed odio sit amet nibh
                                              vulputate
                                            </p>
                                          </div>
                                        </div>
                                      </li>
                                    </>
                                  );
                                })}

                                {/* Single */}
                               
                              </ul>
                              <div className="product-review-form">
                                <h3>Add a review</h3>
                                <div class="rating">
                                  <div class="rate">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                  </div>
                                </div>
                                <form action="#">
                                  <textarea
                                    name="review-message"
                                    className="form-control"
                                    placeholder="Your Review"
                                    spellCheck="false"
                                    defaultValue={""}
                                  />
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your Name"
                                  />
                                  <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                  />
                                  <button className="button-1" type="submit">
                                    Submit Review
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                &nbsp;
                {/* Our Portfolio */}
                {/* Our Portfolio END */}
                &nbsp;
                <Footers />
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default TopTredingProductScreen;
