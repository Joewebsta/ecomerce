import React from "react";
import User from "./User";

const UserList = ({
  users,
  handleDelete
}) => {
  if (users.length === 0) {
    return <p>No users.</p>
  }

  const userList = users.map(user => {
    return <User key={user._id} user={user} handleDelete={handleDelete} />;
  });

  return <ul className="user-list">{userList}</ul>;
};

export default UserList;