import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products , onRemove}) => {
  return (!products || products.length === 0) 
  ? (
    <p>No products found.</p>
  )
  : (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove}/>
      ))}
    </div>
  );
};

export default ProductList;
