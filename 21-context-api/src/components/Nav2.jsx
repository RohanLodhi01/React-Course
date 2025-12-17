import React, { useContext } from "react";
import { PostDataContext, ThemeDataContext } from "../context/themeContext";

const Nav2 = (props) => {
  // const data = useContext(ThemeDataContext)
  // console.log(data)
  
  const [theme,setTheme] = useContext(ThemeDataContext)

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Nav2;
