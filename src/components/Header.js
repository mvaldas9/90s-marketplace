import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartTotalQuantity } from "../redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = getCartTotalQuantity(cart);

  return (
    <header className="app-header">
      <Link to="/" className="app-header-logo">
        90s shop
      </Link>

      <nav className="app-header-nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}
