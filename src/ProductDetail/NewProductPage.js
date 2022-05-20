import React from "react";
import Navbar from "../compontent/Navbar/Navbar.js";

function NewProductPage() {
  return (
    <>
      <Navbar />
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
                  <li>
                    {" "}
                    <h1 style={{ color: "#107cc4", fontWeight: "600px" }}>
                      {" "}
                      Products Details
                    </h1>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section start shope page */}

      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="blog-details-thumb">
                <div className="modal_tab">
                  <div className="tab-content product-details-large">
                    <div
                      className="tab-pane fade show active"
                      id="tabd1"
                      role="tabpanel"
                    >
                      <div className="modal_tab_img">
                        <a href="#">
                          <img src="http://3.110.38.250/assets/uploads/product/thumbnail_images/1647350685whatsapp-image-2020-12-04-at-1-14-24-pm-500x500.jpeg" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabd2" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="#">
                          <img src="assets/img/product/2.jpg" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabd3" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="#">
                          <img src="assets/img/product/3.jpg" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabd4" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="#">
                          <img src="assets/img/product/4.jpg" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabd5" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="#">
                          <img src="assets/img/product/5.jpg" alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal_tab_button">
                    <ul
                      className="nav product_navactive owl-carousel"
                      role="tablist"
                    >
                      <li>
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabd1"
                          role="tab"
                          aria-controls="tabd1"
                          aria-selected="false"
                        >
                          <img src="assets/img/product/1.jpg" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabd2"
                          role="tab"
                          aria-controls="tabd2"
                          aria-selected="false"
                        >
                          <img src="assets/img/product/2.jpg" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link button_three"
                          data-toggle="tab"
                          href="#tabd3"
                          role="tab"
                          aria-controls="tabd3"
                          aria-selected="false"
                        >
                          <img src="assets/img/product/3.jpg" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabd4"
                          role="tab"
                          aria-controls="tabd4"
                          aria-selected="false"
                        >
                          <img src="assets/img/product/4.jpg" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabd5"
                          role="tab"
                          aria-controls="tabd5"
                          aria-selected="false"
                        >
                          <img src="assets/img/product/5.jpg" alt="img" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="products-details-content">
                <div className="quickview-modal-content-full">
                  {/* Ratting */}
                  <div className="ratting">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <small>( 25 Reviews )</small>
                    </span>
                  </div>
                  {/* Title */}
                  <h3>Vegetables Juices</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac dui sed nunc sagittis maximus. Sed lobortis
                    commodo dapibus. Nunc placerat, massa nec blandit egestas,
                    eros diam lacinia lectus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                  </p>
                  {/* Price */}
                  <div className="pricing">
                    <span>
                      $200 <del>$210</del>
                    </span>
                  </div>
                  {/* Category */}
                  <div className="cate">
                    <span>
                      <strong>Categories:</strong>
                    </span>
                    <span>
                      <a href="#">Cover,</a>
                    </span>
                    <span>
                      <a href="#">Seat,</a>
                    </span>
                    <span>
                      <a href="#">Car,</a>
                    </span>
                    <span>
                      <a href="#">Parts</a>
                    </span>
                  </div>
                  {/* size */}
                  <div className="size">
                    <h4> Size: </h4>
                    <select name="size">
                      <option value={0}>XXL</option>
                      <option value="l1">LG</option>
                      <option value={1}>L</option>
                      <option value={2}>M</option>
                      <option value={3}>S</option>
                      <option value={4}>SM</option>
                    </select>
                  </div>
                  {/* Add To Cart */}
                  <div className="quantity-add-cart">
                    <span className="quantity">
                      <input
                        type="number"
                        min={1}
                        max={1000}
                        step={1}
                        defaultValue={1}
                      />
                    </span>
                    <div className="cart-btn">
                      <a className="button-1" href="#">
                        <i className="fas fa-shopping-cart" /> Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="quick-view-sahre mt-50">
                    <span>
                      <strong>Share :</strong>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="product-details-tab">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
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
                    data-bs-toggle="tab"
                    data-bs-target="#info"
                    role="tab"
                    aria-controls="info"
                    aria-selected="false"
                  >
                    Additional Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#review"
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
                        Pellentesque aliquet, sem eget laoreet ultrices, ipsum
                        metus feugiat sem, quis fermentum turpis eros eget
                        velit. Donec ac tempus ante. Fusce ultricies massa
                        massa. Fusce aliquam, purus eget sagittis vulputate,
                        sapien libero hendrerit est, sed commodo augue nisi non
                        neque. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed tempor, lorem et placerat
                        vestibulum, metus nisi posuere nisl, in accumsan elit
                        odio quis mi. Cras neque metus, consequat et blandit et,
                        luctus a nunc. Etiam gravida vehicula tellus, in
                        imperdiet ligula euismod eget. One
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nam
                        fringilla augue nec est tristique auctor. Donec non est
                        at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla.
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
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Capacity</td>
                            <td>5 Kg</td>
                          </tr>
                          <tr>
                            <td>Color</td>
                            <td>Black, Brown, Red,</td>
                          </tr>
                          <tr>
                            <td>Water Resistant</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Material</td>
                            <td>Artificial Leather</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <div className="pd-tab-item">
                    <h3 className="review-title">2 Reviews</h3>
                    <ul>
                      {/* Single */}
                      <li className="review-single">
                        <img src="assets/img/tes1.jpg" alt="avatar" />
                        <div className="content">
                          <div className="review-info">
                            <h5>Alea Brooks</h5>
                            <small> Jun 01, 2021 </small>
                          </div>
                          <div className="ratting">
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <div className="revie-con">
                            <p>
                              Lorem Ipsumin gravida nibh vel velit auctor
                              aliquet. Aenean sollicitudin, lorem quis bibendum
                              auctor, nisi elit consequat ipsum, nec sagittis
                              sem nibh id elit. Duis sed odio sit amet nibh
                              vulputate
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* Single */}
                      <li className="review-single">
                        <img src="assets/img/tes2.jpg" alt="avatar" />
                        <div className="content">
                          <div className="review-info">
                            <h5>Alea Brooks</h5>
                            <small> Jun 01, 2021 </small>
                          </div>
                          <div className="ratting">
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                            <span>
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <div className="revie-con">
                            <p>
                              Lorem Ipsumin gravida nibh vel velit auctor
                              aliquet. Aenean sollicitudin, lorem quis bibendum
                              auctor, nisi elit consequat ipsum, nec sagittis
                              sem nibh id elit. Duis sed odio sit amet nibh
                              vulputate
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="product-review-form">
                      <h3>Add a review</h3>
                      <div className="ratting mb-30">
                        <span>
                          <i className="fas fa-star" />
                        </span>
                        <span>
                          <i className="fas fa-star" />
                        </span>
                        <span>
                          <i className="fas fa-star" />
                        </span>
                        <span>
                          <i className="fas fa-star" />
                        </span>
                        <span>
                          <i className="fas fa-star" />
                        </span>
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
          {/* Section Headding */}
          <div className="row mt-50">
            <div className="col-lg-12">
              <div className="section-headding text-center  mb-50">
                <h2>
                  <span>Related Products.</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Related Products */}
          <div className="row">
            <div className="col-lg-12">
              <div className="related-product-slider owl-carousel">
                {/* Single */}
                <div className="product-item">
                  <div className="sale-badge">
                    <span>sale</span>
                  </div>
                  {/* Thumbnail */}
                  <div className="product-thumbnail">
                    <a href="product-details.html">
                      <img src="assets/img/product/1.jpg" alt="product" />
                    </a>
                    <a className="wishlist" href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                    <div className="product-overly-btn">
                      <ul>
                        <li>
                          <a href="cart.html">
                            <i className="fas fa-shopping-cart" />
                            <span>Add to Cart</span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            href="#"
                          >
                            <i className="far fa-eye" />
                            <span>Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="product-content">
                    <div className="ratting">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <h4>
                      <a href="product-details.html">Raddish Vegitable</a>
                    </h4>
                    <div className="pricing">
                      <span>
                        $200 <del>$210</del>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="product-item">
                  <div className="sale-badge">
                    <span>25%</span>
                  </div>
                  {/* Thumbnail */}
                  <div className="product-thumbnail">
                    <a href="product-details.html">
                      <img src="assets/img/product/2.jpg" alt="product" />
                    </a>
                    <a className="wishlist" href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                    <div className="product-overly-btn">
                      <ul>
                        <li>
                          <a href="cart.html">
                            <i className="fas fa-shopping-cart" />
                            <span>Add to Cart</span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            href="#"
                          >
                            <i className="far fa-eye" />
                            <span>Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="product-content">
                    <div className="ratting">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <h4>
                      <a href="product-details.html">Raddish Vegitable</a>
                    </h4>
                    <div className="pricing">
                      <span>
                        $200 <del>$210</del>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="product-item">
                  <div className="sale-badge">
                    <span>new</span>
                  </div>
                  {/* Thumbnail */}
                  <div className="product-thumbnail">
                    <a href="product-details.html">
                      <img src="assets/img/product/3.jpg" alt="product" />
                    </a>
                    <a className="wishlist" href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                    <div className="product-overly-btn">
                      <ul>
                        <li>
                          <a href="cart.html">
                            <i className="fas fa-shopping-cart" />
                            <span>Add to Cart</span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            href="#"
                          >
                            <i className="far fa-eye" />
                            <span>Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="product-content">
                    <div className="ratting">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <h4>
                      <a href="product-details.html">Raddish Vegitable</a>
                    </h4>
                    <div className="pricing">
                      <span>
                        $200 <del>$210</del>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="product-item">
                  {/* Thumbnail */}
                  <div className="product-thumbnail">
                    <a href="product-details.html">
                      <img src="assets/img/product/4.jpg" alt="product" />
                    </a>
                    <a className="wishlist" href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                    <div className="product-overly-btn">
                      <ul>
                        <li>
                          <a href="cart.html">
                            <i className="fas fa-shopping-cart" />
                            <span>Add to Cart</span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            href="#"
                          >
                            <i className="far fa-eye" />
                            <span>Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="product-content">
                    <div className="ratting">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <h4>
                      <a href="product-details.html">Raddish Vegitable</a>
                    </h4>
                    <div className="pricing">
                      <span>
                        $200 <del>$210</del>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="product-item">
                  <div className="sale-badge">
                    <span>sale</span>
                  </div>
                  {/* Thumbnail */}
                  <div className="product-thumbnail">
                    <a href="product-details.html">
                      <img src="assets/img/product/5.jpg" alt="product" />
                    </a>
                    <a className="wishlist" href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                    <div className="product-overly-btn">
                      <ul>
                        <li>
                          <a href="cart.html">
                            <i className="fas fa-shopping-cart" />
                            <span>Add to Cart</span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            href="#"
                          >
                            <i className="far fa-eye" />
                            <span>Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="product-content">
                    <div className="ratting">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <h4>
                      <a href="product-details.html">Raddish Vegitable</a>
                    </h4>
                    <div className="pricing">
                      <span>
                        $200 <del>$210</del>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="product-item">
                  <div className="sale-badge">
                    <span>25%</span>
                  </div>
                  {/* Thumbnail */}
                  <div className="product-thumbnail">
                    <a href="product-details.html">
                      <img src="assets/img/product/6.jpg" alt="product" />
                    </a>
                    <a className="wishlist" href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                    <div className="product-overly-btn">
                      <ul>
                        <li>
                          <a href="cart.html">
                            <i className="fas fa-shopping-cart" />
                            <span>Add to Cart</span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            href="#"
                          >
                            <i className="far fa-eye" />
                            <span>Quick view</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="product-content">
                    <div className="ratting">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <h4>
                      <a href="product-details.html">Raddish Vegitable</a>
                    </h4>
                    <div className="pricing">
                      <span>
                        $200 <del>$210</del>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Related Products */}
        </div>
      </section>

      {/* section end shope page */}
    </>
  );
}

export default NewProductPage;
