import { createContext, useState } from "react";

export const PostDataContext = createContext();
export const ThemeDataContext = createContext();
const ThemeContext = (props) => {
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;

// HOW TO DO CONTEXT API IN ACTION

// create karo context
// provide karo data
// use karo data ko
