import React, { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "./StateProvider";
import { actionType } from "../Context/reducer";
import BassURL from "../Api/Api";

let items = [];

function CartItemsR({ item, setFlag, flag }) {
  const [qty, setqty] = useState(1);
  const [{ cartItems }, dispatch] = useStateValue();
  // const [items, setitems] = useState([])

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify());
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setqty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.vendor_id += 1;
          setFlag(flag + 1);
        }
      });

      cartDispatch();
    } else {
      //  inital state value is one so you need to check if 1 then remove it

      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setqty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.vendor_id -= 1;
            setFlag(flag + 1);
          }
        });

        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  return (
    <>
      <div className="CartIn ">
        <img src={BassURL + item?.product_image} alt="" className="CartInImg" />

        {/* name section  */}

        <div className="nameSection">
          <p className="nameSectionPara   ">{item?.product_title}</p>
          <p className="nameSectionPrice">{`₹ ${item.product_price * qty}`}</p>
        </div>

        {/* button section */}

        <div className="buttonSection   group">
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("remove", item?.id)}
          >
            <BiMinus style={{ color: "white" }} />
          </motion.div>
          <p className="buttonSectionMinus">{qty}</p>
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("add", item?.id)}
          >
            <BiPlus style={{ color: "white" }} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default CartItemsR;
