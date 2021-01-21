import { createStore } from "redux";
import data from "./data.json";

const initialState = { products: data.products, cart: [] };

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      let cart = state.cart.slice();
      let newProduct = payload;
      let productInCart = cart.find((product) => product.id === newProduct.id);

      if (productInCart) {
        cart = cart.map((product) => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: ++product.quantity,
            };
          }
          return product;
        });
      } else {
        cart.push({
          ...newProduct,
          quantity: 1,
        });
      }

      return {
        ...state,
        cart,
      };
    default:
      return state;
  }
}

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
