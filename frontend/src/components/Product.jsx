import React from "react";

const Product = ({
  product,
  handleDelete
}) => {
  const {
    id,
    name,
    price,
    category
  } = product;
  return <li className="product">
    <span>{name}</span>
    <span>{price}</span>
    <span>{category}</span>
    <button onClick={() => { handleDelete(id) }}>delete</button>
  </li>;
};

export default Product;