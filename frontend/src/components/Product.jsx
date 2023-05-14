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
  return <li>
    <p>{name}{price}{category}</p>
    <button onClick={() => {
      handleDelete(id);
    }}>delete</button>
  </li>;
};

export default Product;