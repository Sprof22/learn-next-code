import React from "react";

const Users = ({user}) => {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
    </>
  );
};

export default Users;
