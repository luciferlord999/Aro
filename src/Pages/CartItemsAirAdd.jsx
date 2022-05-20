import React, { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../compontent/StateProvider";
import { actionType } from "../Context/reducer";

let CartItems=[]

function CartItemsAirAdd({ item  , setFlag,flag}) {
  const [qty, setqty] = useState(item.qty);
  const [{ cartItemss , user ,cart, total}, dispatch] = useStateValue();
  // const [items, setitems] = useState([]);
  // const [{  }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItemss", JSON.stringify());
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItemss: CartItems,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setqty(qty + 1);
      cartItemss.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });

      cartDispatch();
    } else {
      //  inital state value is one so you need to check if 1 then remove it

      if (qty == 1) {
        CartItems = cartItemss.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setqty(qty - 1);
        cartItemss.map((item) => {
          if (item.id === id) {
            item.qty -=1;
            setFlag(flag + 1);
          }
        });

        cartDispatch();
      }
    }
  };

  useEffect(() => {
    CartItems  =cartItemss;
  }, [qty,CartItems]);

  

  return (
    <>
      <div className="CartIn ">
        <img src={item?.image} alt="" className="CartInImg" />

        {/* name section  */}

        <div className="nameSection">
          <p className="nameSectionPara   ">{item?.name}</p>
          <p className="nameSectionPrice">
            {" "}
            {`₹ ${
            item.price * qty
          }`}
          
          </p>
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

export default CartItemsAirAdd;
