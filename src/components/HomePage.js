import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
  const products = useSelector((state) => state.products);

  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-list-item"
            style={{ backgroundImage: `url(${product.imgUrl})` }}
          >
            <div className="product-list-item-details">
              {product.name}
              <div>{product.price}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
