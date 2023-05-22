import React from "react";

const User = ({
  user,
  handleDelete
}) => {
  const {
    id,
    first_name: firstName,
    last_name: lastName,
    age,
    city
  } = user;
  return <li className="product">
    <span>{firstName}</span>
    <span>{lastName}</span>
    <span>{age}</span>
    <span>{city}</span>
    <button onClick={() => { handleDelete(id) }}>delete</button>
  </li>;
};

export default User;