import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotalPrice,
  getCartTotalQuantity,
  addToCart,
  removeFromCart,
} from "../redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = getCartTotalPrice(cart);
  const totalQuantity = getCartTotalQuantity(cart);
  const dispatch = useDispatch();
  const addProductToCart = (product) => dispatch(addToCart(product));
  const removeProductFromCart = (product) => dispatch(removeFromCart(product));

  return (
    <div>
      {cart.length ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th colSpan="2">Quantity</th>
              <th>Item price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.imgUrl} width="60" alt="" />
                  <strong>{product.name}</strong>
                </td>
                <td>
                  <CartItemQuantity
                    quantity={product.quantity}
                    onIncrease={() => addProductToCart(product)}
                    onDecrease={() => removeProductFromCart(product)}
                  />
                </td>
                <td>{product.price} EUR</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">
                Total price of {totalQuantity} items: {totalPrice} EUR
              </th>
            </tr>
          </tfoot>
        </table>
      ) : (
        "No items in the cart"
      )}
    </div>
  );
}

function CartItemQuantity({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="cart-table-quantity-control">
      <button onClick={onIncrease} className="button">
        +
      </button>
      <span>{quantity}</span>
      <button onClick={onDecrease} className="button">
        -
      </button>
    </div>
  );
}
