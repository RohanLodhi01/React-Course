import React from "react";

const App = () => {
  // localStorage.setItem("user", "rohan lodhi");

  // const users = localStorage.getItem("user");

  // console.log(users);

  // localStorage.removeItem('user')

  const user = {
    name: "rohan",
    age: 21,
    loc: "bhopal",
  };

  // localStorage.setItem('user',user)
  // localStorage.setItem("user", JSON.stringify(user));

  // const user1 = localStorage.getItem('user')
  const user1 = JSON.parse(localStorage.getItem("user"));

  console.log(user1);
  return;
};

export default App;
