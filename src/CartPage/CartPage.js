// import React, { useEffect, useState } from "react";
// import Navbar from "../compontent/Navbar/Navbar";
// import "./CartPage.css";
// import Footer from "../Pages/ProductDetails/Footers";
// import { useStateValue } from "../compontent/StateProvider";
// import { actionType } from "../Context/reducer";
// import $ from "jquery";
// import CartItemsR from "../compontent/CartItemsA";

// function CartPage() {
//   //  hide and show add to cart
//   const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

//   const [flag, setFlag] = useState(1);
//   const [tot, setTot] = useState(0);

//   useEffect(() => {
//     let totalPrice = cartItems.reduce(function (accumulator, item) {
//       return accumulator + item.vendor_id * item.product_price;
//     }, 0);
//     setTot(totalPrice);
//   }, [tot, flag]);

//   const clearCart = () => {
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: [],
//     });

//     localStorage.setItem("cartItems", JSON.stringify([]));
//   };

//   const cartDispatch = () => {
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: cartItems,
//     });

//     localStorage.setItem("cartItems", JSON.stringify());

//     const heki = cartItems;

//     heki.map((data, index) => {
//       const datas = {
//         "product_ name": data.product_title,
//         product_price: data.product_price,
//         product_id: data.brand_id,
//         product_image: data.product_image,
//         product_Qty: data.vendor_id,
//         product_total_price: data.vendor_id * data.product_price,
//         totle: tot,
//       };

//       console.log(datas);
//     });
//   };

//   const showCart = () => {
//     dispatch({
//       type: actionType.SET_CART_SHOW,
//       cartShow: !cartShow,
//     });
//   };

//   // toast js
//   var x = document.getElementById("snackbar");
//   setTimeout(function () {
//     x.className = "show";
//   }, 3000);
//   setTimeout(function () {
//     x.className = x.className.replace("show", "hide");
//   }, 15000);
//   $("#snackbar .close").click(function () {
//     x.className = x.className.replace("show", "hide");
//   });

//   return (
//     <>
//       <Navbar />

//       {/* cart content start */}
//       {cartItems && cartItems.length > 0 ? (
//         <section
//           className="h-100 h-custom"
//           style={{ backgroundColor: "#d2c9ff" }}
//         >
//           <div className="container py-5 h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12">
//                 <div
//                   className="card card-registration card-registration-2"
//                   style={{
//                     borderRadius: "15px",
//                     filter: "drop-shadow(-5px 12px 12px #107cc4)",
//                   }}
//                 >
//                   <div className="card-body p-0">
//                     <div className="row g-0">
//                       <div className="col-lg-8">
//                         <div className="p-5">
//                           <div className="d-flex justify-content-between align-items-center mb-5">
//                             <h1 className="fw-bold mb-0 text-black">
//                               Shopping Cart
//                             </h1>
//                             <h6 className="mb-0 text-muted">3 items</h6>
//                           </div>
//                           <hr className="my-4" />

//                           <div className="bottnIn scrollbar-none">
//                             {/* cart Item */}

//                             {cartItems &&
//                               cartItems.map((item) => (
//                                 <CartItemsR
//                                   key={item.id}
//                                   item={item}
//                                   setFlag={setFlag}
//                                   flag={flag}
//                                 />
//                               ))}
//                           </div>

//                           <div className="row mb-4 d-flex justify-content-between align-items-center">
//                             <div className="col-md-2 col-lg-2 col-xl-2">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
//                                 className="img-fluid rounded-3"
//                                 alt="Cotton T-shirt"
//                               />
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-3">
//                               <h6 className="text-muted">Shirt</h6>
//                               <h6 className="text-black mb-0">
//                                 Cotton T-shirt
//                               </h6>
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
//                               <button
//                                 className="btn btn-link px-2"
//                                 onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
//                               >
//                                 <i className="fa fa-minus" />
//                               </button>
//                               <input
//                                 id="form1"
//                                 min={0}
//                                 name="quantity"
//                                 defaultValue={1}
//                                 type="number"
//                                 className="form-control form-control-sm"
//                               />
//                               <button
//                                 className="btn btn-link px-2"
//                                 onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
//                               >
//                                 <i className="fa fa-plus" />
//                               </button>
//                             </div>
//                             <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//                               <h6 className="mb-0">€ 44.00</h6>
//                             </div>
//                             <div className="col-md-1 col-lg-1 col-xl-1 text-end">
//                               <a href="#!" className="text-muted">
//                                 <i className="fa fa-times" />
//                               </a>
//                             </div>
//                           </div>
//                           <hr className="my-4" />
//                           <div className="row mb-4 d-flex justify-content-between align-items-center">
//                             <div className="col-md-2 col-lg-2 col-xl-2">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
//                                 className="img-fluid rounded-3"
//                                 alt="Cotton T-shirt"
//                               />
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-3">
//                               <h6 className="text-muted">Shirt</h6>
//                               <h6 className="text-black mb-0">
//                                 Cotton T-shirt
//                               </h6>
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
//                               <button
//                                 className="btn btn-link px-2"
//                                 onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
//                               >
//                                 <i className="fas fa-minus" />
//                               </button>
//                               <input
//                                 id="form1"
//                                 min={0}
//                                 name="quantity"
//                                 defaultValue={1}
//                                 type="number"
//                                 className="form-control form-control-sm"
//                               />
//                               <button
//                                 className="btn btn-link px-2"
//                                 onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
//                               >
//                                 <i className="fas fa-plus" />
//                               </button>
//                             </div>
//                             <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//                               <h6 className="mb-0">€ 44.00</h6>
//                             </div>
//                             <div className="col-md-1 col-lg-1 col-xl-1 text-end">
//                               <a href="#!" className="text-muted">
//                                 <i className="fas fa-times" />
//                               </a>
//                             </div>
//                           </div>
//                           <hr className="my-4" />
//                           <div className="row mb-4 d-flex justify-content-between align-items-center">
//                             <div className="col-md-2 col-lg-2 col-xl-2">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
//                                 className="img-fluid rounded-3"
//                                 alt="Cotton T-shirt"
//                               />
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-3">
//                               <h6 className="text-muted">Shirt</h6>
//                               <h6 className="text-black mb-0">
//                                 Cotton T-shirt
//                               </h6>
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
//                               <button
//                                 className="btn btn-link px-2"
//                                 onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
//                               >
//                                 <i className="fas fa-minus" />
//                               </button>
//                               <input
//                                 id="form1"
//                                 min={0}
//                                 name="quantity"
//                                 defaultValue={1}
//                                 type="number"
//                                 className="form-control form-control-sm"
//                               />
//                               <button
//                                 className="btn btn-link px-2"
//                                 onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
//                               >
//                                 <i className="fas fa-plus" />
//                               </button>
//                             </div>
//                             <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//                               <h6 className="mb-0">€ 44.00</h6>
//                             </div>
//                             <div className="col-md-1 col-lg-1 col-xl-1 text-end">
//                               <a href="#!" className="text-muted">
//                                 <i className="fas fa-times" />
//                               </a>
//                             </div>
//                           </div>
//                           <hr className="my-4" />
//                           <div className="pt-5">
//                             <h6 className="mb-0">
//                               <a href="#!" className="text-body">
//                                 <i className="fas fa-long-arrow-alt-left me-2" />
//                                 Back to shop
//                               </a>
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-4 bg-grey">
//                         <div className="p-5">
//                           <h3
//                             className="fw-bold mb-5 mt-2 pt-1 text-center"
//                             style={{ color: "white" }}
//                           >
//                             Cart Details
//                           </h3>
//                           <hr className="my-4" />
//                           <div className="d-flex justify-content-between mb-4">
//                             <h5 className="text-uppercase">items 3</h5>
//                             <h5>€ 132.00</h5>
//                           </div>

//                           <hr className="my-4" />
//                           <div className="d-flex justify-content-between mb-5">
//                             <h5 className="text-uppercase">Total price</h5>
//                             <h5>€ 137.00</h5>
//                           </div>
//                           <button
//                             type="button"
//                             className="btn  btn-block btn-lg"
//                             data-mdb-ripple-color="dark"
//                             style={{
//                               color: "white",
//                               background:
//                                 "linear-gradient(243deg, #0e5a7c66, #107cc4)",
//                               filter: "drop-shadow(8px 2px 2px #107cc4)",
//                             }}
//                           >
//                             Register
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <>
//           <section
//             className="h-100 h-custom"
//             style={{ backgroundColor: "#d2c9ff" }}
//           >
//             <div className="container py-5 h-100">
//               <div className="row d-flex justify-content-center align-items-center h-100">
//                 <div className="col-12">
//                   <div
//                     className="card card-registration card-registration-2"
//                     style={{
//                       borderRadius: "15px",
//                       filter: "drop-shadow(-5px 12px 12px #107cc4)",
//                     }}
//                   >
//                     <div className="card-body p-0">
//                       <div className="row g-0">
//                         <div className="col-lg-12">
//                           <div className="p-5">
//                             <div className="d-flex justify-content-between align-items-center mb-5">
//                               <h1 className="fw-bold mb-0 text-black">
//                                 EMPTY CART
//                               </h1>
//                               <h6 className="mb-0 text-muted">0</h6>
//                             </div>
//                             <hr className="my-4" />
//                             <div className="row mb-4 d-flex justify-content-between align-items-center">
//                               <div className="col-md-12 col-lg-12 col-xl-12 text-center">
//                                 <img
//                                   src="/images/empty-cart.gif"
//                                   className="img-fluid rounded-3"
//                                   alt="Cotton T-shirt"
//                                 />
//                               </div>
//                             </div>

//                             <hr className="my-4" />
//                             <div className="pt-5">
//                               <h6 className="mb-0">
//                                 <a href="/" className="text-body">
//                                   <i className="fas fa-long-arrow-alt-left me-2" />
//                                   Back to shop
//                                 </a>
//                               </h6>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       )}

//       {/* cart content end */}
//       <Footer />
//     </>
//   );
// }

// export default CartPage;



import React, { useEffect, useState } from 'react'
import Banner from '../compontent/Content/Banner';
import Navbar from '../compontent/Navbar/Navbar';
import { useStateValue } from "../compontent/StateProvider";
import { actionType } from "../Context/reducer";
import BassURl from '../Api/Api';

function CartPage() {


  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, data) {
      return accumulator + data.vendor_id * data.product_price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag]);




  // const cartDispatch = () => {
  //   dispatch({
  //     type: actionType.SET_CARTITEMS,
  //     cartItems: cartItems,
  //   });

  //   localStorage.setItem("cartItems", JSON.stringify());














  //   // heki.map((data, index) => {
  //   //   const datas = {
  //   //     "product_ name": data.product_title,
  //   //     product_price: data.product_price,
  //   //     product_id: data.brand_id,
  //   //     product_image: data.product_image,
  //   //     product_Qty: data.vendor_id,
  //   //     product_total_price: data.vendor_id * data.product_price,
  //   //     totle: tot,
  //   //   };

  //   //  
  //   // });
  // };


  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };















  return (
    <>
      {/* <Navbar />
      <Banner /> */}
      <div>
        <div className="img-story2" />
        <div className="inner-grid" />
        <section className="pay-grid">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="steps">
                  <div className="line" />
                  <div className="step">
                    <div className="circle2 active">{/*<i class="fa fa-info-circle" aria-hidden="true"></i>*/}1</div>
                    <div className="label">Cart<span className="responsive_hide"> </span></div>
                  </div>
                  <div className="step">
                    <div className="circle2">{/*<i class="fa fa-credit-card" aria-hidden="true"></i>*/}2</div>
                    <div className="label">Checkout<span className="responsive_hide"> </span></div>
                  </div>
                  <div className="step">
                    <div className="circle2">{/*<i class="fa fa-check" aria-hidden="true"></i>*/}3</div>
                    <div className="label">Payment Options</div>
                  </div>
                  <div className="step">
                    <div className="circle2">{/*<i class="fa fa-check" aria-hidden="true"></i>*/}4</div>
                    <div className="label">Complete Payment </div>
                  </div>
                </div>
                <hr />
              </div>
              {/*   <div class="col-md-12"><h5 class="header-title"></h5></div>	*/}
              <div className="col-md-7">
                <h5 className="header-title">Cart</h5>
                <form className="shipping-info" method="post" action="{!! url('/cart-out-user') !!}">
                  <div className="row m-0">
                    <div className="col-md-6" style={{ marginBottom: 10 }}>
                      <h5>Shipping Address</h5>
                    </div>
                    <div className="col-md-6" style={{ marginBottom: 10 }}>
                      <button type="button" data-customer="{!! Session::get('client')['id'] !!}" className="btn btn-sm btn-warning add-address" style={{ float: 'right' }}> +Add Address</button>
                    </div>
                    {/* <div className="col-md-12">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="row">
                            <div className="col-md-6">
                              <input type="radio" name="customer_address_id" defaultValue="{!! $row_address->id !!}" required /> {'{'}!! ucfirst($row_address-&gt;type) !!{'}'}
                            </div>
                            <div className="col-md-6">
                              {'{'}{'{'}--<a href="javascript:void(0)" data-address="{!! $row_address->id !!}" data-customer="{!! Session::get('client')['id'] !!}" style={{ float: 'right' }}><i className="fa fa-edit" /> Change </a>--{'}'}{'}'}
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="address-grid">
                            <ul>
                              <li>{'{'}!! ucfirst(Session::get('client')['first_name']).' '.ucfirst(Session::get('client')['last_name']) !!{'}'}</li>
                              <li>{'{'}!! $row_address-&gt;locality !!{'}'}</li>
                              <li>{'{'}!! $row_address-&gt;address !!{'}'}</li>
                              <li>{'{'}!! $row_address-&gt;city.', '.$row_address-&gt;state.' '.$row_address-&gt;zip !!{'}'}</li>
                              <li>{'{'}!! $row_address-&gt;country !!{'}'}</li>
                              <li>Phone: {'{'}!! Session::get('client')['mobile'] !!{'}'}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-md-12  text-center">
                      <button type="submit" className="btn btn-sm submit-btn mt-2">Next &gt; </button>
                    </div>
                  </div>
                </form>
                <div className="shadow bg-white p-3">
                  <form className="shipping-info" action="{!! url('sign-in') !!}" method="post">
                    <div className="row m-0">
                      <div className="col-sm-12">
                        <h3 className="mt-0">Login</h3>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email/Mobile Number</label>
                        <input type="text" className="form-control" name="email" id="email" placeholder="Enter your email/mobile." required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password." required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <button type="submit" className="btn btn-sm btn-warning">Login</button>
                      </div>
                      <div className="col-sm-12">
                        <input type="checkbox" className=" d-inline mt-2" id="chb" required />
                        <label htmlFor="chb" className="form-check-label">&nbsp;Update me on order status, news and exclusive offers via SMS, RCS, WhatsApp and Email </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="shadow bg-white p-3 mt-3">
                  <form className="shipping-info" method="post" action="{!! url('cart-out') !!}">
                    <div className="row m-0">
                      <div className="col-sm-12">
                        <h3>Registration</h3>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-f">First Name</label>
                        <input type="text" className="form-control" name="fname" id="name-f" placeholder="Enter your first name." required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="name-l">Last name</label>
                        <input type="text" className="form-control" name="lname" id="name-l" placeholder="Enter your last name." required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email2" placeholder="Enter your email" required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="address-1">House/Flat Number</label>
                        <input type="address" className="form-control" name="locality" id="address-1" placeholder="Locality/House/Street no." required />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label htmlFor="address-2">Address </label>
                        <input type="address" className="form-control" name="address" id="address-2" placeholder="Village/City Name." required />
                      </div>
                      <div className="col-sm-4 form-group">
                        <label htmlFor="zip">Pin Code</label>
                        <input type="text" className="form-control" name="zip" id="zip" placeholder="Pin Code" required />
                      </div>
                      <div className="col-sm-4 form-group">
                        <label htmlFor="state">City</label>
                        <input type="text" className="form-control" name="city" id="city" placeholder="Enter your city name." required />
                      </div>
                      <div className="col-sm-4 form-group">
                        <label htmlFor="state">State</label>
                        <input type="address" className="form-control" name="state" id="state" placeholder="Enter your state name." required />
                      </div>
                      <div className="col-sm-4 form-group">
                        <label htmlFor="Country">Country</label>
                        <input type="text" className="form-control" name="country" id="country" placeholder="Country" required />
                      </div>
                      <div className="col-sm-4 form-group">
                        <label htmlFor="sex">Gender</label>
                        <select id="sex" name="gender" className="form-control browser-default custom-select">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="col-sm-8 form-group">
                        <label htmlFor="tel">Contact No.</label>
                        <input type="tel" name="phone" className="form-control" id="tel" placeholder="+91-" required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="Password" name="password" className="form-control" id="pass" placeholder="Enter your password." required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label htmlFor="pass2">Confirm Password</label>
                        <input type="Password" name="cnf-password" className="form-control" id="pass2" placeholder="Re-enter your password." required />
                      </div>
                      <div className="col-sm-12">
                        <input type="checkbox" className="form-check d-inline" id="chb2" defaultChecked required />
                        <label htmlFor="chb" className="form-check-label">&nbsp;	Save this information for next time </label>
                      </div>
                      <div className="col-md-12  text-center">
                        <button type="submit" className="btn btn-sm submit-btn" style={{ width: 160, height: 45 }}>Next &gt; </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5">




                <h5 className="header-title">Your Order</h5>
                <div className="row">

                  {
                    cartItems?.map((data, index) => {

                      return (

                        <div className="col-md-12">
                          <div className="card shadow border-radius rounded p-1 mt-2">




                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img src={BassURl + data?.product_image} width="150px" alt="Sample Image" />
                              </div>
                              <div className="flex-grow-1 ms-3">

                                {/* {
                            StoreData.map((data, index) => {
                              // console.log(data?.product_title)
                              
                            })
                          } */}



                                <h6 key={index} className="mt-0">{data?.product_title.slice(0, 45)}</h6>


                                {/* <h6 className="mt-0"></h6> */}


                                <div className="row m-0 align-items-center">
                                  <div className="col-4 p-0 align-self-center">
                                    qty:

                                    {data?.vendor_id}


                                  </div>
                                  <div className="col-4 p-0">
                                    <p className=" mb-0"><i className="fa fa-inr" aria-hidden="true" /> <strong> {data?.product_price}</strong> </p>
                                  </div>
                                  <div className="col-4 p-0">
                                    <a className="btn btn-sm text-white btn-light remove"
                                      style={{ color: "white" }}
                                      onClick={clearCart} >
                                      Remove
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )







                    })
                  }
                </div>

                <br />

                <h5 className="header-title">Order Summary</h5>
                <div className="card shadow border-radius">
                  <div className="card-body">
                    <dl className="dlist-align sub-total">
                      <dt>Subtotal:</dt>
                      <dd className="text-right"><i className="fa fa-inr" aria-hidden="true" />  /-</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Shipping:</dt>
                      <dd className="text-right text-danger">Calculated at next step</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Discount:</dt>
                      <dd className="text-right text-danger">- <i className="fa fa-inr" aria-hidden="true" /> 0.00/-</dd>
                    </dl>
                    <dl className="dlist-align total">
                      <dt>Total:</dt>
                      <dd className="text-right text-dark"><strong><i className="fa fa-inr" aria-hidden="true" /> {tot} /-</strong></dd>
                    </dl>
                    {/*                    <hr> <a href="#" class="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <a href="#" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>*/}
                  </div>
                </div>
                <div className="text-center">
                  <a className="btn btn-sm submit-btn text-white mt-3" href="/">Continue to shipping</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="modal fade" id="add-address-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ background: 'url("https://static6.depositphotos.com/1160567/648/i/600/depositphotos_6485582-stock-photo-location-location-location.jpg")' }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="exampleModalLabel">Add Shipping Address</h5>
              </div>
              <form method="post" id="add_address_form">
                <input type="hidden" id="customer_id" name="customer_id" defaultValue required />
                <input type="hidden" id="address_id" name="address_id" defaultValue />
                <div className="modal-body">
                  <div className="row m-0">
                    <div className="col-md-4">
                      <div className="form-group">
                        <select className="form-control" name="type" required>
                          <option value>Select Type</option>
                          <option value="home">Home</option>
                          <option value="office">Office</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" defaultValue className="form-control" placeholder="Locality" name="locality" required />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" defaultValue className="form-control" placeholder="Zip" name="zip" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Address" name="address" required defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" defaultValue className="form-control" placeholder="City" name="city" required />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" defaultValue className="form-control" placeholder="State" name="state" required />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input type="text" defaultValue className="form-control" placeholder="Country" name="country" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage



