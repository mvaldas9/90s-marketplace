import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux";

export default function ProductPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();
  const addProductToCart = (productId) => dispatch(addToCart(productId));

  return (
    <div className="product">
      <img src={product.imgUrl} alt="" width={400} />
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price}</p>

        <button
          className="product-button"
          onClick={() => addProductToCart(product.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
