export const actionType = {
  SET_USER: "SET_USER",

  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_CARTITEMSA: "SET_CARTITEMSA",
  SET_CART_SHOWA: "SET_CART_SHOWA",

  SET_REMOVE: "SET_REMOVE",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_CART_SHOWA:
      return {
        ...state,
        cartShowA: action.cartShowA,
      };
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.SET_CARTITEMSA:
      return {
        ...state,
        cartItemss: action.cartItemss,
      };
    case actionType.SET_TOTAL:
      return {
        ...state,
        total: state.cartItemss.map((item) => item.price),
      };

    default:
      return state;
  }
};

export default reducer;
