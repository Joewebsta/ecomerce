import React from "react";
import Product from "./Product";

const ProductList = ({
  products,
  handleDelete
}) => {
  const productList = products.map(product => {
    return <Product key={product.id} product={product} handleDelete={handleDelete} />;
  });
  return <ul>{productList}</ul>;
};

export default ProductList;