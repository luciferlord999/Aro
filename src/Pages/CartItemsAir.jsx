import React, { useEffect, useState } from "react";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";

import { useStateValue } from "../compontent/StateProvider";
import { actionType } from "../Context/reducer";
import CartItemsAirAdd from "./CartItemsAirAdd"
// import CartItemsAir from "./CartItemsA";
let CartItems =[]


function CartItemsAir({ item  , price,qty}) {
  //  hide and show add to cart
  const [{  cartShowA, cartItemss, user,cart , total }, dispatch] = useStateValue();
  const [items, setitems] = useState([]);

  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCarts = () => {
    dispatch({
      type: actionType.SET_CART_SHOWA,
      cartShowA: ! cartShowA,
    });
  };




  

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMSA,
      cartItemss: [],
    });

    localStorage.setItem("cartItemss", JSON.stringify([]));
  };

  // total
  
  useEffect(() => {
    let totalPrice = cartItemss.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);



 
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="widd bg-white drop-shadow-md  "
        style={{
          zIndex: "2000000",
          display: "flex ",
          flexDirection: "column",
          position: "fixed",
          top: "0",
          right: "0",
          width: "22%",
          height: "100vh",
        }}
      >
        <div
          className="w-full flex items-center justify-between p-4 cursor-pointer"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <motion.div whileTap={{ scale: 0.75 }} onClick={()=>showCarts()}>
            <MdOutlineKeyboardBackspace
              className="text- text-3xl my-2"
              style={{
                fontSize: "1.9rem",
                cursor: "pointer",
                lineHeight: "2.5rem",
              }}
            />{" "}
          </motion.div>{" "}
          <p
            className=" text-textColor text-lg font-semibold gap-2"
            style={{
              fontSize: "1.295rem",
              lineHeight: "1.75rem",
              marginTop: "0.9rem",
            }}
          >
            {" "}
            Cart{" "}
          </p>
          <motion.p
            whileTap={{ scale: "0.75" }}
            className=" hover:shadow-md "
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              marginTop: "0.9rem",
              marginBottom: "0.rem",
              backgroundColor: "#0056b7",
              borderRadius: "0.375rem",
              color: "white",
              cursor: "pointer",
              transitionDuration: " 100ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
              fontSize: "1rem" /* 16px */,
              lineHeight: "1.5rem",
            }}

            onClick={clearCart}
          >
            Clear <RiRefreshFill />
          </motion.p>{" "}
        </div>

        {/* bottom section  */}

        {cartItemss && cartItemss.length > 0 ? (
          <div className="bottnSection">
            {" "}
            {/* cart Item Section */}{" "}
            <div className="bottnIn scrollbar-none">
              {" "}
              {/* cart Item */}
              {cartItemss &&
                cartItemss.map((item) => (
                  <CartItemsAirAdd  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag} />
                ))}{" "}
            </div>
            {/* cart total section  */}
            <div className="CartTotal">
              <div className="CartTotalIn">
                <p className="SubTotal"> Sub Total </p>{" "}
                <p className="SubTotal"> 124 </p>{" "}
              </div>{" "}
              <div className="CartTotalIn">
                <p className="SubTotal"> Delivery </p>{" "}
                <p className="SubTotal"> 5.6 </p>{" "}
              </div>
              <div className="Total ">
             
                <hr />
              </div>
              <div className="InTotal">
                <p className="InTotalIn "> Total </p>{" "}
                <p className="InTotalIn ">{tot} </p>{" "}
              </div>
              {user ? (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className="Checkout shadow-lg"
                >
                  Login To Check Out{" "}
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className="Checkout shadow-lg"
                >
                  Check Out{" "}
                </motion.button>
              )}
            </div>
            
          
          </div>
        ) : (
          <div className="EmptyCart">
            <img src="/images/emptyCart.svg" className="EmptyCartImg" alt="" />
            <p className="EmptyCartPara">
              {" "}
              Add Some Product To Your Cart{" "}
            </p>{" "}
          </div>
        )}
      </motion.div>
    </>
  );
}

export default CartItemsAir;
