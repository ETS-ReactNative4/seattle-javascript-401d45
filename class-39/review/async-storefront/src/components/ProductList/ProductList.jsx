import {useDispatch, useSelector} from 'react-redux';
import { createProduct } from '../../store/products.store.js';

function ProductList() {

  let dispatch = useDispatch();
  let count = useSelector(state => state.products.count);
  let products = useSelector(state => state.products.results);

  function handleCreate(e) {
    e.preventDefault();
    let json = {
      "name": "product from product list",
      "category": "electronics",
      "inStock": 10,
      "price": 10,
    };
    dispatch(createProduct(json));
  }

  return (
    <div>
      <h2>Product Count: <span data-testid="count">{count}</span></h2>
      {products.map(product => (
        <div key={product._id}>
          <p data-testid="product-name">{product.name}</p>
          <p>{product.category}</p>
          <p>{product.inStock}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <button data-testid="create-btn" onClick={handleCreate}>Create Product!</button>
    </div>
  )
}

export default ProductList;
