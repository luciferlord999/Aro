import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { motion } from "framer-motion";
import { actionType } from "../../Context/reducer";
import { toast } from "react-toastify";
import { MdShoppingBasket } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import "./Pss.css";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useParams } from "react-router-dom";
import SkeletonTrendingProduct from "../../Skeleton/SkeletonTrendingProduct";
import BassURl from "../../Api/Api";

const product = [
  {
    id: "1",
    name: "Kent 9 litres ",
    image: "/images/Product/1.png",
    price: "17198",
    qty: 1,
  },
  {
    id: "2",
    name: "Kent 8 litres ",
    image: "/images/Product/2.png",
    price: "18750",
    qty: 1,
  },
  {
    id: "3",
    name: "Pure 4 litres",
    image: "/images/Product/3.png",
    price: "7999",
    qty: 1,
  },
  {
    id: "4",
    name: "Pureit Max Water",
    image: "/images/Product/4.png",
    price: "12990",
    qty: 1,
  },
  {
    id: "5",
    name: "Eureka Forbes  ",
    image: "/images/Product/5.png",
    price: "18990",
    qty: 1,
  },
  {
    id: "6",
    name: "Kent Grand  ",
    image: "/images/Product/6.png",
    price: "16990",
    qty: 1,
  },
  {
    id: "7",
    name: "Kent Prime  ",
    image: "/images/Product/7.png",
    price: "18990",
    qty: 1,
  },
  {
    id: "8",
    name: "Eureka Forbes",
    image: "/images/Product/8.png",
    price: "8399",
    qty: 1,
  },
];

function Products() {
  //  hide and show add to cart
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  // add to cart product show
  const [items, setItems] = useState([]);
  const addtocart = (dt) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });

    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  //   toast

  const notify = () => {
    toast.success("Product is Added", { position: "bottom-left" });
  };

  // api call top product
  const [post, setPost] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    axios.get(`/web-api/top-product`).then((response) => {
      setPost(response.data.data);
      setLoader(false);
    });



  }, []);

  const options = {
    loop: false,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: [
      "<img src='/images/left-arrow.webp' class='nav-buttons  owl-prevs'/>",
      " <img src='/images/right-arrow.webp' class='nav-buttons owl-nexts'/>",
    ],
    autoplay: false,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1024: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="section-full bg-gray content-inner about-us shadow-lg p-3 mt-5 bg-white rounded  backgroundss">
        <div className="container-fluid ">
          <div className="section-head text-black text-center">
            <h2 className="box-title"> TOP TRENDING PRODUCT</h2>
            <div className="dlab-separator bg-primary" />
          </div>

          <section className="product-tabs  position-relative ">
            <div className="container">
              {/*End nav-tabs*/}
              <div
                className="tab-contents"
                id="myTabContent"
                style={{ overFlow: "none" }}
              >
                <div
                  className="tab-pane fade show active"
                  id="tab-one"
                  role="tabpanel"
                  aria-labelledby="tab-one"
                >
                  <div className="row product-grid-4">
                    <OwlCarousel
                      {...options}
                      className="slider-items owl-theme owl-carousel  "
                    >
                      {post?.map((data, index) => {
                        return (
                          <>
                            <div className="cardtr" key={index}>
                              <div className="card-headertr">
                                <img
                                  src={BassURl + data?.product_image}
                                  alt="user"
                                />
                              </div>
                              <div className="card-bodytr">
                                <div className="item-details">
                                  <div className="item-title">
                                    <h5
                                      className="Heading-7 product-names"
                                      style={{ textTransform: " uppercase" }}
                                    >
                                      {data?.product_title}
                                    </h5>
                                  </div>
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

                                  <div className="items-action">
                                    <div className="rate">
                                      <span className="rupee remove-before">
                                        <span style={{ fontSize: "14px" }}>
                                          MRP:
                                          {data.product_price
                                            .toString()
                                            .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ","
                                            )}
                                        </span>
                                      </span>
                                    </div>

                                    <div className="action-add">
                                      <div className="action-slider">
                                        <button
                                          className="add-to-carts addCartBtn-home"
                                          data-cat="TOP TRENDING PRODUCT"
                                          data-base_amt={data?.product_price}
                                          data-text={data?.product_title}
                                          onClick={() =>
                                            setItems([...cartItems, data])
                                          }
                                        >
                                          Add To Cart
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </OwlCarousel>


                    {/*

                     {!loader
                      ? post?.map((data, indexs) => {
                        return (
                          <>
                            <div
                              className="col-lg-1-5 col-md-4 col-12 col-sm-6  "
                              key={indexs}
                            >
                              <div
                                className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated  shadow-lgs"
                                data-wow-delay=".1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeIn",
                                }}
                              >
                                <div className="product-img-action-wrap ">
                                  <div className="product-img product-img-zoom">
                                    <a href={`/product-details/${data.product_url}`}>
                                      <img
                                        className="default-img"
                                        src={`http://3.110.38.250/${data.product_image}`}
                                        alt=""
                                      />
                                      <img
                                        className="hover-img"
                                        src={`http://3.110.38.250/${data.product_image}`}
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="product-action-1">
                                    <Link
                                      aria-label="Quick view"
                                      className="action-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickViewModal"
                                      to={`/product-details/${data.product_url}`}
                                    >
                                      <i
                                        className="fa fa-eye"
                                        style={{ color: "#107cc4" }}
                                      />
                                    </Link>
                                  </div>
                                  <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="sale">Sale</span>
                                  </div>
                                </div>
                                <div className="product-content-wrap">
                                  <h2 style={{ textTransform: "capitalize" }}>
                                    <Link
                                      to={`/product-details/${data.product_url}`}
                                    >
                                      {data.product_title}
                                    </Link>
                                  </h2>
                                  <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                      <div
                                        className="product-rating"
                                        style={{ width: "90%" }}
                                      />
                                    </div>
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
                                  </div>

                                  <div className="product-card-bottom">
                                    <div className="product-price">
                                      <span>
                                        ₹
                                        {data.product_price
                                          .toString()
                                          .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                          )}{" "}
                                        /-
                                      </span>
                                    </div>
                                    <div className="add-cart">
                                      <motion.a
                                        whileTap={{ scale: 0.95 }}
                                        className="add"
                                        style={{ color: "#146285" }}
                                        onClick={() =>
                                          setItems([...cartItems, data])
                                        }
                                      >
                                        <i className="fa fa-shopping-cart mr-1" />
                                        Add to cart{" "}
                                      </motion.a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                      : <SkeletonTrendingProduct />}
                    
                    


                     */}






                    {/*end product card*/}

                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab one*/}
              </div>
              {/*End tab-content*/}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Products;
