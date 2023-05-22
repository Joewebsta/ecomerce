import React from "react";
import CreateUserForm from "./CreateUserForm";
// import ProductList from "./ProductList";
import { useState, useEffect } from 'react'
// import productService from '../service/productService';

const UserPage = (props) => {
  // const {
  //   name,
  //   price,
  //   category,
  //   handleSubmit,
  //   setName,
  //   setPrice,
  //   setCategory,
  //   products,
  //   handleDelete
  // } = props;

  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const products = await productService.getProducts();
  //     setProducts(products);
  //   }

  //   getProducts();
  // }, []);

  // const handleDelete = async (id) => {
  //   productService.deleteProduct(id);
  //   const filteredProducts = products.filter(product => product.id !== id);
  //   setProducts(filteredProducts);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newProduct = { name, price, category };
    // const createdProduct = await productService.createProduct(newProduct);
    // setProducts([...products, createdProduct]);

    setFirstName('');
    setLastName('');
    setAge('');
    setCity('');
  }

  return (
    <>
      <h1>Users</h1>

      <CreateUserForm
        firstName={firstName}
        lastName={lastName}
        age={age}
        city={city}
        handleSubmit={handleSubmit}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setAge={setAge}
        setCity={setCity}
      />
      {/* <ProductList
        products={products}
        handleDelete={handleDelete}
      /> */}
    </>
  )
}

export default UserPage;