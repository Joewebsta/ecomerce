import React from "react";
import CreateProductForm from "./CreateProductForm";
import ProductList from "./ProductList";

const ProductPage = (props) => {
  const {
    name,
    price,
    category,
    handleSubmit,
    setName,
    setPrice,
    setCategory,
    products,
    handleDelete
  } = props;

  return (
    <>
      <h1>Products</h1>
      <CreateProductForm
        name={name}
        price={price}
        category={category}
        handleSubmit={handleSubmit}
        setName={setName}
        setPrice={setPrice}
        setCategory={setCategory}
      />
      <ProductList
        products={products}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default ProductPage;