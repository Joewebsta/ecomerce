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
  return (<li>
    <p>{name}{price}{category}</p>
    <button onClick={() => { handleDelete(id) }}>delete</button>
  </li>)
}

const CreateProductForm = ({ name, price, category, handleSubmit, setName, setPrice, setCategory }) => {
  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      <label htmlFor="price">Price</label>
      <input type="text" id="price" name="price" value={price} onChange={handlePriceChange} />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" name="category" value={category} onChange={handleCategoryChange} />
      <button type="submit">Create product</button>
    </form>
  );
};

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
