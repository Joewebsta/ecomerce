import React from "react";
import CreateProductForm from "./CreateProductForm";
import ProductList from "./ProductList";
import { useState, useEffect } from 'react'
import productService from '../service/productService';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const products = await productService.getProducts();
      setProducts(products);
    }

    getProducts();
  }, []);

  const handleDelete = async (id) => {
    productService.deleteProduct(id);
    const filteredProducts = products.filter(product => product.id !== id);
    setProducts(filteredProducts);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, category };
    const createdProduct = await productService.createProduct(newProduct);
    setProducts([...products, createdProduct]);

    setName('');
    setPrice('');
    setCategory('');
  }

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