import React from "react";
import Users from "../components/users";

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Users user={user}/>
          </div>
        );
      })}
    </>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data, "this what we need");

  return {
    props: {
      users: data,
    }, // will be passed to the page component as props
  };
}
