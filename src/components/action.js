export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE = "REMOVE";

export const removeItem = (id) => {
     return {type: REMOVE, payload: {id}}
}