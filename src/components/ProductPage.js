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
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>

      <button onClick={() => addProductToCart(product.id)}>Add to cart</button>

      <div>
        <img src={product.imgUrl} width={300} alt="" />
      </div>
    </div>
  );
}
