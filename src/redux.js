import { createStore } from "redux";
import data from "./data.json";

const initialState = { products: data.products, cart: [] };

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      return state;
  }
}

export const addToCart = (productId) => ({
  type: "ADD_TO_CART",
  payload: productId,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
