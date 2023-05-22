import React from "react";

const CreateUserForm = ({ firstName, lastName, age, city, handleSubmit, setFirstName, setLastName, setAge, setCity }) => {
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} />
      <label htmlFor="price">Age</label>
      <input type="text" id="age" name="age" value={age} onChange={handleAgeChange} />
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" value={city} onChange={handleCityChange} />
      <button type="submit">Create User</button>
    </form>
  );
};


export default CreateUserForm;