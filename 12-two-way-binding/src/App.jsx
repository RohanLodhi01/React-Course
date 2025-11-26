import React from "react";
import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by", title);
    settitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
            // console.log(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
