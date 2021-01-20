import { Link } from 'react-router-dom';
import data from '../data.json';

export default function HomePage() {
  return (
    <div className='product-list'>
      {data.products.map((product) => {
        return (
          <Link key={product.id} to={`/products/${product.id}`} className='product-list-item'>
            {product.name}
          </Link>
        );
      })}
    </div>
  );
}
