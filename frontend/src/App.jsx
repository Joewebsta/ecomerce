import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage';
import UserPage from './components/UserPage';
import NavigationLinks from './components/NavigationLinks';
import './styles/main.css'

const App = () => {
  return (
    <>
      <NavigationLinks />
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<ProductPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App
