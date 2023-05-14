import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import ProductList from './components/ProductList';
import CreateProductForm from './components/CreateProductForm';

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);

      const filteredProducts = products.filter(product => product.id !== id);
      setProducts(filteredProducts);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, category };

    try {
      const response = await axios.post("http://localhost:3000/api/products/", newProduct);
      const createdProduct = response.data;
      setProducts([...products, createdProduct]);
      setName('');
      setPrice('');
      setCategory('');
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      console.log(response.data);
      setProducts(response.data);
    }

    getProducts();
  }, []);

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

export default App
