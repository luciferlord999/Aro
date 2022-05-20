import { fetchCart, fetchUser  , fetchCartAp , fetchTotal} from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const cartInfos = fetchCartAp();
const total = fetchTotal();





export const initialState = {
    user:userInfo,
    foodItems:null,
    cartShow :false,
    cartShowA :false,
    
    cartItems :cartInfo,
    cartItemss :cartInfos,
    total:null,
}
