import React from 'react';
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import productService from './service/productService';
import ProductPage from './components/ProductPage';
import NavigationLinks from './components/NavigationLinks';
import './styles/main.css'

const App = () => {
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

  const productPageProps = {
    name,
    price,
    category,
    products,
    handleSubmit,
    setName,
    setPrice,
    setCategory,
    handleDelete,
  }

  return (
    <>
      <NavigationLinks />
      <Routes>
        <Route path="/products" element={<ProductPage {...productPageProps} />} />
        <Route path="/" element={<ProductPage {...productPageProps} />} />
        <Route path="/users" element={<h1>Users</h1>} />
      </Routes>
    </>
  )
}

export default App
