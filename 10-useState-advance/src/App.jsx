import React from "react";
import { useState } from "react";

// const App = () => {
  // const [name, setname] = useState({ user: "rohan", age: 20 });
  // const changeName = () => {
  //   const newUser = { ...name };
  //   newUser.user = "aman";
  //   newUser.age = 18
  //   // console.log(newUser);

  //   setname(newUser)

  // };

  // const [num, setnum] = useState([10, 20, 30]);
  
  // const changeNum = () => {
  //   const newNum = [...num];
  //   newNum.push(88);
  //   setnum(newNum)
  // };

const App = () => {
  const [no, setno] = useState(10);
  const increment = () => {
    setno(prev => (prev+1));
    setno(prev => (prev+1));
    setno(prev => (prev+1));
  };
  return (
    <div>
      <h1>{no}</h1>
      <button onClick={increment}>click</button>
    </div>
  );
};

export default App;


