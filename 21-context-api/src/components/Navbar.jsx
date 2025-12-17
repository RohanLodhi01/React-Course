import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { PostDataContext, ThemeDataContext } from "../context/themeContext";
import Button from "./Button";

// instead of props(an object) you can write {children,theme}
//  this is destructuring of object


const Navbar = (props) => {
  // console.log(props.children);

  const data = useContext(PostDataContext)
  const [theme] = useContext(ThemeDataContext)
  // console.log(data)
  return (
    <div className={theme}>
      <h2>Sheryians</h2>  
      {/* {props.children[0]} */}
      {/* {props.children[1]} */}
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
