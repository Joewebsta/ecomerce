import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ProductList = ({ products }) => {
  const productList = products.map(product => {
    return <Product key={product.id} product={product} />
  });

  return <ul>{productList}</ul>;
}

const Product = ({ product }) => {
  const { id, name, price, category } = product;
  return <li key={id}>
    <p>{name}{price}{category}</p>
    <button>delete</button>
  </li>
}

const App = () => {
  const [products, useProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      console.log(response.data);
      useProducts(response.data);

    }

    getProducts();
  }, []);


  return (
    <>
      <h1>Hello world!</h1>
      <ProductList products={products} />
    </>
  )
}

export default App
