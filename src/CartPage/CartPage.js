import React, { useEffect, useState } from "react";
import Navbar from "../compontent/Navbar/Navbar";
import "./CartPage.css";
import Footer from "../Pages/ProductDetails/Footers";
import { useStateValue } from "../compontent/StateProvider";
import { actionType } from "../Context/reducer";
import $ from "jquery";
import CartItemsR from "../compontent/CartItemsA";

function CartPage() {
  //  hide and show add to cart
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.vendor_id * item.product_price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  const cartDispatch = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: cartItems,
    });

    localStorage.setItem("cartItems", JSON.stringify());

    const heki = cartItems;

    heki.map((data, index) => {
      const datas = {
        "product_ name": data.product_title,
        product_price: data.product_price,
        product_id: data.brand_id,
        product_image: data.product_image,
        product_Qty: data.vendor_id,
        product_total_price: data.vendor_id * data.product_price,
        totle: tot,
      };

      console.log(datas);
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  // toast js
  var x = document.getElementById("snackbar");
  setTimeout(function () {
    x.className = "show";
  }, 3000);
  setTimeout(function () {
    x.className = x.className.replace("show", "hide");
  }, 15000);
  $("#snackbar .close").click(function () {
    x.className = x.className.replace("show", "hide");
  });

  return (
    <>
      <Navbar />

      {/* cart content start */}
      {cartItems && cartItems.length > 0 ? (
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "#d2c9ff" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{
                    borderRadius: "15px",
                    filter: "drop-shadow(-5px 12px 12px #107cc4)",
                  }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>
                            <h6 className="mb-0 text-muted">3 items</h6>
                          </div>
                          <hr className="my-4" />

                          <div className="bottnIn scrollbar-none">
                            {/* cart Item */}

                            {cartItems &&
                              cartItems.map((item) => (
                                <CartItemsR
                                  key={item.id}
                                  item={item}
                                  setFlag={setFlag}
                                  flag={flag}
                                />
                              ))}
                          </div>

                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">Shirt</h6>
                              <h6 className="text-black mb-0">
                                Cotton T-shirt
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                <i className="fa fa-minus" />
                              </button>
                              <input
                                id="form1"
                                min={0}
                                name="quantity"
                                defaultValue={1}
                                type="number"
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              >
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">€ 44.00</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fa fa-times" />
                              </a>
                            </div>
                          </div>
                          <hr className="my-4" />
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">Shirt</h6>
                              <h6 className="text-black mb-0">
                                Cotton T-shirt
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                <i className="fas fa-minus" />
                              </button>
                              <input
                                id="form1"
                                min={0}
                                name="quantity"
                                defaultValue={1}
                                type="number"
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">€ 44.00</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fas fa-times" />
                              </a>
                            </div>
                          </div>
                          <hr className="my-4" />
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">Shirt</h6>
                              <h6 className="text-black mb-0">
                                Cotton T-shirt
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                <i className="fas fa-minus" />
                              </button>
                              <input
                                id="form1"
                                min={0}
                                name="quantity"
                                defaultValue={1}
                                type="number"
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">€ 44.00</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fas fa-times" />
                              </a>
                            </div>
                          </div>
                          <hr className="my-4" />
                          <div className="pt-5">
                            <h6 className="mb-0">
                              <a href="#!" className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2" />
                                Back to shop
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3
                            className="fw-bold mb-5 mt-2 pt-1 text-center"
                            style={{ color: "white" }}
                          >
                            Cart Details
                          </h3>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">items 3</h5>
                            <h5>€ 132.00</h5>
                          </div>

                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total price</h5>
                            <h5>€ 137.00</h5>
                          </div>
                          <button
                            type="button"
                            className="btn  btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                            style={{
                              color: "white",
                              background:
                                "linear-gradient(243deg, #0e5a7c66, #107cc4)",
                              filter: "drop-shadow(8px 2px 2px #107cc4)",
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section
            className="h-100 h-custom"
            style={{ backgroundColor: "#d2c9ff" }}
          >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <div
                    className="card card-registration card-registration-2"
                    style={{
                      borderRadius: "15px",
                      filter: "drop-shadow(-5px 12px 12px #107cc4)",
                    }}
                  >
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div className="col-lg-12">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">
                                EMPTY CART
                              </h1>
                              <h6 className="mb-0 text-muted">0</h6>
                            </div>
                            <hr className="my-4" />
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-12 col-lg-12 col-xl-12 text-center">
                                <img
                                  src="/images/empty-cart.gif"
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                            </div>

                            <hr className="my-4" />
                            <div className="pt-5">
                              <h6 className="mb-0">
                                <a href="/" className="text-body">
                                  <i className="fas fa-long-arrow-alt-left me-2" />
                                  Back to shop
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* cart content end */}
      <Footer />
    </>
  );
}

export default CartPage;
