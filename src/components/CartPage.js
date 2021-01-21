import { useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      Are you ready to purchase these?
      <br />
      {cart.map((product) => (
        <div key={product.id}>
          {product.name} ({product.quantity})
        </div>
      ))}
    </div>
  );
}
