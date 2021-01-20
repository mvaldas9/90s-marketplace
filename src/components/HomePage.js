import { Link } from 'react-router-dom';
import data from '../data.json';

export default function HomePage() {
  return (
    <div className='product-list'>
      {data.products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='product-list-item'
            style={{ backgroundImage: `url(${product.imgUrl})`}}
          >
            <div className='product-list-item-details'>
              {product.name}
              <div>{product.price}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
