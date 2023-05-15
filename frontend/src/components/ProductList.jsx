import React from "react";
import Product from "./Product";

const ProductList = ({
  products,
  handleDelete
}) => {
  if (products.length === 0) {
    return <p>No products.</p>
  }

  const productList = products.map(product => {
    return <Product key={product.id} product={product} handleDelete={handleDelete} />;
  });

  return <ul className="product-list">{productList}</ul>;
};

export default ProductList;