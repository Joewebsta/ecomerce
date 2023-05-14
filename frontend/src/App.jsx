import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ProductList = ({ products, handleDelete }) => {
  const productList = products.map(product => {
    return <Product key={product.id} product={product} handleDelete={handleDelete} />
  });

  return <ul>{productList}</ul>;
}

const Product = ({ product, handleDelete }) => {
  const { id, name, price, category } = product;
  return <li key={id}>
    <p>{name}{price}{category}</p>
    <button onClick={() => { handleDelete(id) }}>delete</button>
  </li>
}

const App = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);

      const filteredProducts = products.filter(product => product.id !== id);
      setProducts(filteredProducts);
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
      <ProductList products={products} handleDelete={handleDelete} />
    </>
  )
}

export default App
