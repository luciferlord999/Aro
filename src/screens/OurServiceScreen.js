import React from "react";
import Navbar from "../compontent/Navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../compontent/LoadingBox";
// import NavbaAIR from "../compontent/Navbar/NavbaAIR";
// import Navbar from "../compontent/Navbar/Navbar"
import ServiceNavbar from "../compontent/Navbar/ServiceNavbar";

function OurServiceScreen(props) {
  const params = useParams();
  //   const { name: productName } = params;

  // image api call
  const img = [
    {
      id: "1",
      name: "AC-Service",
      image:
        "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    },
    {
      id: "2",
      name: "Handy-Man",
      image:
        "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    },
    {
      id: "3",
      name: "Furniture-Assembly",
      image:
        "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    },
    {
      id: "4",
      name: "Plumber",
      image:
        "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    },
    {
      id: "5",
      name: "Lown-Mowing",
      image:
        "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    },
    {
      id: "6",
      name: "Lown-Mxowing",
      image:
        "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    },
    // {
    //   id: "7",
    //   name: "Lown Mowing",
    //   image:
    //     "https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2019/08/AC-3.png",
    // },
  ];

  return (
    <>
      {img?.map((data, index) => {
        if (data.name === params.name) {







          return (
            <>
              <ServiceNavbar />

              <div
                className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle"
                style={{ backgroundImage: "url(images/AC.webp)" }}
              >
                <div className="container">
                  <div className="dlab-bnr-inr-entry">
                    <h1 className="text-white">{data?.name}</h1>
                    {/* <p>Find awesome places, bars, restaurants &amp; activities.</p> */}
                    {/* Breadcrumb row */}
                    <div className="breadcrumb-row">
                      <ul className="list-inline">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>Listings</li>
                      </ul>
                    </div>
                    {/* Breadcrumb row END */}
                  </div>
                </div>
              </div>










              <div className="container">
                {/* bannenr section start */}

                <div
                  className="row"
                  data-spy="scroll"
                  data-target="#myScrollspy"
                  data-offset="1"
                >
                  {/* service and service details colstart */}
                  <div
                    className="col-lg-3 scrollbar     "
                    id="style-8 myScrollspy"
                    style={{
                      border: "1px solid #a9a3a3",
                      borderRadius: "20px",
                      marginLeft: "25px",
                      marginTop: "25px",
                      height: "480px",
                      position: "static",
                    }}
                  >
                    <div class="force-overflow"></div>
                    <div className="vid my-5">
                      <div className="wrap ">
                        <a href="#section1">
                          <button className="buttons shadow-lgs">
                            Service
                          </button>
                        </a>
                      </div>
                      <div className="wrap my-5">
                        <a href="#repair">
                          {" "}
                          <button className="buttons shadow-lgs">
                            Repairs
                          </button>
                        </a>
                      </div>
                      <div className="wrap my-5">
                        <button className="buttons shadow-lgs">
                          Installation & Uninstallation
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-9 scrollbar"
                    style={{
                      border: "1px solid #a9a3a3",
                      borderRadius: "20px",
                      marginLeft: "25px",
                      marginTop: "25px",
                      height: "480px",
                      position: "static",
                      maxWidth: "70%",
                    }}
                  >
                    <div class="force-overflow"></div>
                    <div className="container-fluid">
                      <div
                        className="section-head text-black text-center"
                        style={{ marginBottom: "10px" }}
                        id="section1"
                      >
                        <h2 id="service" className="box-title">
                          {" "}
                          SERVICE
                        </h2>
                        <div className="dlab-separator bg-primary" />
                      </div>
                    </div>
                    {img.map((data, index) => {
                      return (
                        <>
                          <div
                            className="row p-2  mt-10 mb-5 shadow-sm   bg-white  "
                            style={{ borderRadius: "3rem " }}
                          >
                            <div className="col-md-3 mt-1">
                              <img
                                className="img-fluid img-responsive rounded product-image"
                                src={data.image}
                              />
                            </div>
                            <div className="col-md-6 mt-1">
                              <h5>{data.name}</h5>
                              <div className="d-flex flex-row">
                                <div className="ratings mr-2">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                                <span>4.3</span>
                              </div>
                              <div className="mt-1 mb-1 spec-1">
                                <span style={{ color: "green" }}>
                                  BESTSELLER
                                </span>
                                &nbsp;
                                <span className="dot" />
                                <span>Deep Clean AC Service </span>
                              </div>

                              <span className="dot" />
                              <p className="text-justify text-truncate para mb-0">
                                Get 2x deeper dust removal with unique foam{" "}
                                <br />
                                jet technology
                              </p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                              <div className="d-flex flex-row align-items-center">
                                <h4 className="mr-1">₹1000 /-</h4>
                              </div>

                              <div className="d-flex flex-column mt-4">
                                {/* <a href="/product-details">
                                  <button
                                    whileTap={{ scale: 0.75 }}
                                    className="btn btn-primary btn-sm"
                                    type="button"
                                    style={{ width: "100px" }}
                                  >
                                    {" "}
                                    Details
                                  </button>
                                </a> */}
                                <a>
                                  <button
                                    whileTap={{ scale: 0.2 }}
                                    className="btn btn-outline-primary btn-sm mt-2"
                                    type="button"
                                  >
                                    {" "}
                                    <i className="fa fa-shopping-cart" /> &nbsp;
                                    Add To Cart
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    <div class="force-overflow"></div>
                    <div className="container-fluid">
                      <div
                        className="section-head text-black text-center"
                        style={{ marginBottom: "10px" }}
                      >
                        <h2 id="repair" className="box-title">
                          {" "}
                          REPAIR
                        </h2>
                        <div className="dlab-separator bg-primary" />
                      </div>
                    </div>

                    {img.map((data, index) => {
                      <div
                        className="row p-2  mt-10 mb-5 shadow-sm   bg-white  "
                        style={{ borderRadius: "3rem " }}
                      >
                        <div className="col-md-3 mt-1">
                          <img
                            className="img-fluid img-responsive rounded product-image"
                            src={data.image}
                          />
                        </div>
                        <div className="col-md-6 mt-1">
                          <h5>{data.name}</h5>
                          <div className="d-flex flex-row">
                            <div className="ratings mr-2">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <span>4.3</span>
                          </div>
                          <div className="mt-1 mb-1 spec-1">
                            <span style={{ color: "green" }}>BESTSELLER</span>
                            &nbsp;
                            <span className="dot" />
                            <span>Deep Clean AC Service </span>
                          </div>

                          <span className="dot" />
                          <p className="text-justify text-truncate para mb-0">
                            Get 2x deeper dust removal with unique foam <br />
                            jet technology
                          </p>
                        </div>
                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                          <div className="d-flex flex-row align-items-center">
                            <h4 className="mr-1">₹1000 /-</h4>
                          </div>

                          <div className="d-flex flex-column mt-4">
                            <a href="/product-details">
                              <button
                                whileTap={{ scale: 0.75 }}
                                className="btn btn-primary btn-sm"
                                type="button"
                                style={{ width: "100px" }}
                              >
                                {" "}
                                Details
                              </button>
                            </a>
                            <a>
                              <button
                                whileTap={{ scale: 0.2 }}
                                className="btn btn-outline-primary btn-sm mt-2"
                                type="button"
                              >
                                {" "}
                                <i className="fa fa-shopping-cart" /> &nbsp; Add
                                To Cart
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>;
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default OurServiceScreen;
