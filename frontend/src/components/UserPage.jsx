import React from "react";
import CreateUserForm from "./CreateUserForm";
import UserList from "./UserList";
import { useState, useEffect } from 'react'
import userService from '../service/userService';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const users = await userService.getUsers();
      setUsers(users);
    }

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    userService.deleteUser(id);
    const filteredUsers = users.filter(user => user._id !== id);
    setUsers(filteredUsers);
  }

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
      <UserList
        users={users}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default UserPage;