import React from "react";

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


export default CreateProductForm;