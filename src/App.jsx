import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { use } from 'react';

const App = () => {
  const originalData = {
  "products": [
    { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ]
}
  const [data, setData] = useState(originalData.products)
  const removeProduct = (id) => {
  setData(data.filter(product => product.id !== id))
}
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={data} onRemove={removeProduct}/>
    </div>
    // Commentq
  );
};

export default App;
