import { useParams } from 'react-router-dom';
import data from '../data.json';

export default function ProductPage() {
  const { id } = useParams();
  const product = data.products.find(product => product.id === id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>

      <button onClick={() => console.warn('Not implemented!')}>
        Add to cart
      </button>

      <div><img src={product.imgUrl} width={640} alt='' /></div>
    </div>
  );
}
