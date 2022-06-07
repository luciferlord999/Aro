import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BassURl from './Api/Api';
import parse from 'html-react-parser';
import ServiceNavbar from './compontent/Navbar/ServiceNavbar';
import { Scrollbars } from 'react-custom-scrollbars';
import IconSkeleton from "./Skeleton/IconSkeleton";
import Footers from './Pages/ProductDetails/Footers';
// import './TestingOur.css'

function TestingOurAppliance() {


  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/web-api/top-product`).then((response) => {
      setPost(response.data.data);

    });
  }, []);



  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <></>;
      }
    },
  };
  const [posets, setPosets] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      axios.get(`/web-api/all-service-category`).then((response) => {
        setPosets(response.data.data);
        setLoader(false);
      });
    }, 2000);

    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);



  return (
    <>
      <ServiceNavbar />
      {/* inner page banner */}
      <div className="page-content bg-white" >



        <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{ backgroundImage: 'url(images/banner/aroBanner.webp)' }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              {/* <h1 className="text-white">Listing Right Sidebar</h1>
              <p>Find awesome places, bars, restaurants &amp; activities.</p> */}
              {/* Breadcrumb row */}
              {/* <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li><a href="index.html">Home</a></li>
                  <li>Listing Right Sidebar</li>
                </ul>
              </div> */}
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>
        {/* inner page banner END */}


        <div className="Icon_width">

          <div
            className="category-bx  bg-white shadow-lg p-3 mb-5 bg-white rounded"
            style={{ height: "170px" }}
          >
            {!loader ? (
              posets?.map((get, index) => {
                return (
                  <>
                    <a
                      href="listing-left-sidebar.html"
                      className="category"
                      key={index}
                    >
                      <img className="mega-Menus-Size" src={BassURl + get.service_img} alt="" />
                      <p>{get.service_title}</p>
                    </a>
                  </>
                );
              })
            ) : (
              <IconSkeleton />
            )}
          </div>

        </div>








        {/* MAIN START */}
        <main className="sv-main sv-bg-light">
          <div className="container">
            <hr className='container-fluid' />
            <div className="row">
              <div className="col-12">
                <div className="sv-dbwrapper sv-dbwrappervthree">
                  <div className="sv-dbtitle">


                    {/* <div className="sv-selectwrapper">
                    <span>Sort by:</span>
                    <div className="sv-select">
                      <select id="selectv2" data-placeholder="Recent listings" className="form-control sv-input-field">
                        <option label="Recent listings" />
                        <option>Recent listings</option>
                        <option>Price low to high</option>
                        <option>Price high to low</option>
                        <option>Listing views</option>
                        <option>Listing popularity</option>
                        <option>Listing reviews</option>
                      </select>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <Scrollbars style={{ height: '500px', scrollBehavior: "none" }}>
                  <aside>
                  <div className="fixed">
                            <div className="listing-filter-sidebar">
                              <h4 className="title m-b30">Store By</h4>

                              <button
                                role="group"
                                type="button"
                                class="btn btn-outline-secondary d-flex flex-column mb-3"
                              >
                                Price Low to High
                              </button>
                              <button
                                type="button"
                                class="btn btn-outline-secondary"
                              >
                                Price Hight to Low
                              </button>
                            </div>
                            <div className="listing-filter-sidebar"></div>
                          </div>
                          <div className="fixed">
                            <div className="listing-filter-sidebar">
                              <h4 className="title m-b30">Filter By Price</h4>

                              <div>
                                <div className="price-input">
                                  <div className="field">
                                    <span>Min</span>
                                    <input
                                      type="number"
                                      className="input-min"
                                      defaultValue={2500}
                                    />
                                  </div>
                                  <div className="separator">-</div>
                                  <div className="field">
                                    <span>Max</span>
                                    <input
                                      type="number"
                                      className="input-max"
                                      defaultValue={7500}
                                    />
                                  </div>
                                </div>
                                <div className="slider">
                                  <div className="progress" />
                                </div>
                                <div className="range-input">
                                  <input
                                    type="range"
                                    className="range-min"
                                    min={0}
                                    max={10000}
                                    defaultValue={2500}
                                    step={100}
                                  />
                                  <input
                                    type="range"
                                    className="range-max"
                                    min={0}
                                    max={10000}
                                    defaultValue={7500}
                                    step={100}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="listing-filter-sidebar"></div>
                          </div>
                          <div className="fixed">
                            <div className="listing-filter-sidebar">
                              <h4 className="title m-b30">
                                Purification Technology
                              </h4>

                              <form className="form_1">
                                <span className="form_1_circle" />
                                <div>
                                  <input
                                    defaultChecked
                                    type="radio"
                                    name="section_1_radio"
                                    className="input"
                                    id="Pepperoni"
                                  />
                                  <label
                                    className="cradio"
                                    htmlFor="Pepperoni"
                                  />
                                  <label htmlFor="Pepperoni">
                                    RO + UV + UF + TDS Control
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="radio"
                                    name="section_1_radio"
                                    className="input"
                                    id="Mushrooms"
                                  />
                                  <label
                                    className="cradio"
                                    htmlFor="Mushrooms"
                                  />
                                  <label htmlFor="Mushrooms">
                                    RO + UF + TDS Control
                                  </label>
                                </div>
                              </form>
                            </div>
                            <div className="listing-filter-sidebar"></div>
                          </div>
                  </aside>
                  
                  {/* <aside className="sv-dbsidenav">
                    <a href="javascript:void(0)" className="sv-dbmenu">
                      <i className="icon-chevron-left" />
                    </a>
                    <div className="sv-dbnavlist sv-dbnavlist-v2">
                      <div className="sv-aside-holder">
                        <div
                          className="sv-asidetitle"
                          data-bs-toggle="collapse"
                          href="#collapseExample"
                          data-bs-target="#side1"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Search</h5>
                        </div>
                        <div id="side1" className="collapse show">
                          <div className="sv-aside-content">
                            <div className="sv-inputiconbtn">
                              <div className="sv-placeholderholder">
                                <input
                                  type="text"
                                  className="form-control sv-input-field"
                                  placeholder="Search keyword"
                                />
                              </div>
                              <a href="javascript:void(0);" className="sv-search-icon">
                                <i className="icon-search" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sv-aside-holder">

                      </div>
                      <div className="sv-aside-holder">
                        <div
                          className="sv-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side3"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Price range</h5>
                        </div>
                        <div id="side3" className="collapse show">
                          <div className="sv-aside-content">
                            <div
                              className="sv-rangevalue"
                              data-bs-target="#sv-rangecollapse"
                              role="list"
                              aria-expanded="false"
                            >
                              <div className="sv-areasizebox">
                                <input
                                  type="number"
                                  className="form-control sv-input-field"
                                  step={1}
                                  placeholder="Min price"
                                  id="sv-min-value"
                                />
                                <input
                                  type="number"
                                  className="form-control sv-input-field"
                                  step={1}
                                  placeholder="Max price"
                                  id="sv-max-value"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="sv-distanceholder">
                            <div id="sv-rangecollapse" className="collapse">
                              <div className="sv-distance">
                                <div
                                  id="sv-rangeslider"
                                  className="sv-tooltiparrow sv-rangeslider"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sv-aside-holder">
                        <div
                          className="sv-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side1a"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Rating</h5>
                        </div>
                        <div id="side1a" className="collapse show">
                          <div className="sv-aside-content">
                            <ul className="sv-categoriesfilter">
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="rate" name="rate" />
                                  <label htmlFor="rate">
                                    <span className="sv-featureRating">
                                      <span className="sv-featureRating__stars sv-fivestar">
                                        <span />
                                      </span>
                                      <span className="sv-totalreview">
                                        <span>
                                          5.0/<em>5.0</em>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="rate4" name="rate4" />
                                  <label htmlFor="rate4">
                                    <span className="sv-featureRating">
                                      <span className="sv-featureRating__stars sv-fourstar">
                                        <span />
                                      </span>
                                      <span className="sv-totalreview">
                                        <span>
                                          4.0/<em>5.0</em>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="rate3" name="rate2" />
                                  <label htmlFor="rate3">
                                    <span className="sv-featureRating">
                                      <span className="sv-featureRating__stars sv-threestar">
                                        <span />
                                      </span>
                                      <span className="sv-totalreview">
                                        <span>
                                          3.0/<em>5.0</em>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="rate2a" name="rate2a" />
                                  <label htmlFor="rate2a">
                                    <span className="sv-featureRating">
                                      <span className="sv-featureRating__stars sv-twostar">
                                        <span />
                                      </span>
                                      <span className="sv-totalreview">
                                        <span>
                                          2.0/<em>5.0</em>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="rate1a" name="rate1a" />
                                  <label htmlFor="rate1a">
                                    <span className="sv-featureRating">
                                      <span className="sv-featureRating__stars sv-onestar">
                                        <span />
                                      </span>
                                      <span className="sv-totalreview">
                                        <span>
                                          1.0/<em>5.0</em>
                                        </span>
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="sv-aside-holder">
                        <div
                          className="sv-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#Location"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Location</h5>
                        </div>
                        <div id="Location" className="collapse show">
                          <div className="sv-aside-content">
                            <div className="sv-filterselect">
                              <div className="sv-select">
                                <select
                                  id="selectv10"
                                  data-placeholderinput="Search location"
                                  data-placeholder="Enter zipcode"
                                  className="form-control sv-input-field"
                                >
                                  <option label="Select sub category" />
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Cook Islands">Cook Islands</option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Cote DIvoire">Cote DIvoire</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Curaco">Curacao</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">Czech Republic</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">Dominican Republic</option>
                                  <option value="East Timor">East Timor</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">El Salvador</option>
                                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands">Falkland Islands</option>
                                  <option value="Faroe Islands">Faroe Islands</option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                </select>
                              </div>
                            </div>
                            <div className="sv-distanceholder">
                              <div className="sv-tooltiparrow sv-rangeslider">
                                <h6>
                                  Radius in miles <em>m</em>
                                  <span className="example-val" id="slider1-span">
                                    65
                                  </span>
                                </h6>
                                <div id="sv-rangeslidertwo" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sv-aside-holder">
                        <div
                          className="sv-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side1ab"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Miscellaneous</h5>
                        </div>
                        <div id="side1ab" className="collapse show">
                          <div className="sv-aside-content">
                            <ul className="sv-categoriesfilter">
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="nameaa" name="expcheck" />
                                  <label htmlFor="nameaa">Online bookings</label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="namea" name="expcheck" />
                                  <label htmlFor="namea">Profile photos</label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="namea1" name="expcheck" />
                                  <label htmlFor="namea1">Male only</label>
                                </div>
                              </li>
                              <li>
                                <div className="sv-check sv-checksm">
                                  <input type="checkbox" id="namea2" name="expcheck" />
                                  <label htmlFor="namea2">Female only</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="sv-filterbtns">
                        <a href="javascript:void(0);" className="sv-pb">
                          Apply filters
                        </a>
                        <a href="providerlist.html" className="sv-sb-sliver">
                          Clear all filters
                        </a>
                      </div>
                    </div>
                  </aside> */}
                </Scrollbars>









































              </div>
            
              <div className="col-lg-8 col-xl-8">

                <div className="row">
                  <Scrollbars style={{ height: '500px', scrollBehavior: "none" }}>
                    <div className="sv-freelancerlist-holder" >

                      {
                        post?.map((data, index) => {
                          return (
                            <div className="sv-freelancerlstwrap" key={index}>
                              <div className="sv-freelancerlistinfo">
                                <figure>
                                  <a href="provider-details.html">
                                    <img src={BassURl + data?.product_image} alt="img-description" />
                                  </a>
                                </figure>
                                <div className="sv-btnarea sv-sm-btn">
                                  <a href="javascript:void(0);" className="sv-pb" data-bs-toggle="modal" data-bs-target="#popup12"> <span>ADD TO CART</span><i className="fa fa-shopping-cart" aria-hidden="true" />
                                  </a>
                                </div>
                              </div>
                              <div className="sv-freelancerinfo">
                                <div className="sv-freelancerdetail">
                                  <h5>{data?.product_title}<i className="icon-check-circle sv-linkblue" data-tippy-trigger="mouseenter" data-tippy-html="#sv-verifed" data-tippy-interactive="true" data-tippy-placement="top" /></h5>
                                  <div className="rate">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half" />
                                    <i className="font-small ml-1 text-muted">
                                      (4.0)
                                    </i>
                                  </div>
                                  <div className="sv-totalreview">
                                    <span>4.5/<em>5.0</em><em>User review</em></span>
                                  </div>

                                </div>


                                <div className="sv-description">
                                  <p>
                                    {parse(data?.product_description, options)}
                                  </p>
                                </div>
                                <div className="sv-featureRating">

                                  <div className="sv-iconheart">
                                    <h5 style={{ color: "#00a0e5" }}> ₹ {data?.product_price}</h5>
                                  </div>
                                </div>


                              </div>
                              <hr />
                            </div>


                          )
                        })
                      }





                    </div>
                  </Scrollbars>
                </div>

              </div>


            </div>
          </div>
        </main>
        {/* MAIN END */}
     

      </div>













      {/* wrapper*/}
 





















    </>
  )
}

export default TestingOurAppliance