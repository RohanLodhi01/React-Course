import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [Theme, setTheme] = useState("light");
  return (
    <div>
      <h1>This is {Theme} theme</h1>

      <Navbar Theme={Theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
