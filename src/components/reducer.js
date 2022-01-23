import cartItems from "../cart-items";
import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./action";

// const initialState = {
//     count: 0,
// }

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
      break;
    case DECREASE:
      let newarr = [];
      if (action.payload.amount === 1) {
        return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id )}
      }
      else {
        newarr = state.cart.map((item) => {
            if(item.id === action.payload.id) {
                return { ...item, amount: item.amount - 1 }
            }
            return item;
        })
        return { ...state, cart: newarr }
      }
    case INCREASE:
       const arr = state.cart.map((item) => {
           if(item.id === action.payload.id) {
               return { ...item, amount: item.amount + 1 }
           }
           return item;
       })
       return { ...state, cart: arr }
       break;
    case REMOVE:
        console.log("You remove the value");
      return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id )}
    default:
      return state;
  }
  // if(action.type === CLEAR_CART ) {
  //     return { ...state, cart: []}
  // }
  // return state;
}

export default reducer;
