import { useSelector } from "react-redux";
import { getCartTotalPrice, getCartTotalQuantity } from "../redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = getCartTotalPrice(cart);
  const totalQuantity = getCartTotalQuantity(cart);

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
                <td>{product.quantity}</td>
                <td>{product.price} EUR</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <th colSpan="3">
              Total price of {totalQuantity} items: {totalPrice} EUR
            </th>
          </tfoot>
        </table>
      ) : (
        "No items in the cart"
      )}
    </div>
  );
}
