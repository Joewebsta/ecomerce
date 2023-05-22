import React from "react";

const CreateUserForm = ({ firstName, lastName, age, city, handleSubmit, setFirstName, setLastName, setAge, setCity }) => {
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} />
      {/* <label htmlFor="price">Price</label>
      <input type="text" id="price" name="price" value={price} onChange={handlePriceChange} />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" name="category" value={category} onChange={handleCategoryChange} /> */}
      <button type="submit">Create user</button>
    </form>
  );
};


export default CreateUserForm;