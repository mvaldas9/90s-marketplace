import { createStore } from "redux";
import data from "./data.json";

const initialState = { products: data.products, cart: [] };

function reducer(state = initialState, { type, payload }) {
  if (type === "ADD_TO_CART") {
    let cart = state.cart.slice();
    let productToAdd = payload;
    let productInCart = cart.find((product) => product.id === productToAdd.id);

    if (productInCart) {
      cart = cart.map((product) => {
        if (product.id === productToAdd.id) {
          return {
            ...product,
            quantity: ++product.quantity,
          };
        }
        return product;
      });
    } else {
      cart.push({
        ...productToAdd,
        quantity: 1,
      });
    }

    return {
      ...state,
      cart,
    };
  } else if (type === "REMOVE_FROM_CART") {
    let cart = state.cart.slice();
    let productToRemove = payload;
    let productInCart = cart.find(
      (product) => product.id === productToRemove.id
    );

    if (productInCart) {
      if (productInCart.quantity > 1) {
        cart = cart.map((product) => {
          if (product.id === productToRemove.id) {
            return {
              ...product,
              quantity: --product.quantity,
            };
          }
          return product;
        });
      } else {
        cart = cart.filter((product) => product.id !== productToRemove.id);
      }
    }

    return {
      ...state,
      cart,
    };
  } else {
    return state;
  }
}

export const getCartTotalQuantity = (cart) => {
  return cart.reduce((a, b) => a + b.quantity, 0);
};

export const getCartTotalPrice = (cart) => {
  return cart.reduce((a, b) => a + b.price * b.quantity, 0);
};

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: product,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
