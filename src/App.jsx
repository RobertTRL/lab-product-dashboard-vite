import React, { useState } from 'react';
import ProductList from './components/ProductList';
import originalData from '../db.json'

const App = () => {
  const [data, setData] = useState(originalData.products)
  const removeProduct = (id) => {
  setData(data.filter(product => product.id !== id))
}
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={data} onRemove={removeProduct}/>
    </div>
  );
};

export default App;
