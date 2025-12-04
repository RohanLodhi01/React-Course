import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [Num, setNum] = useState(0);
  const [Num2, setNum2] = useState(100);
  useEffect(
    function () {
      console.log("use effect is running...");
    },
    [Num]
  );

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  function aChanging() {
    console.log("A ki value change ho gyi");
  }

  function bChanging() {
    console.log("B ki value change ho gyi");
  }

  useEffect(function(){
    aChanging()
  },[A])
  return (
    <div className="container">
      <div>
        <h1> Num is {Num}</h1>
        <h1> Num2 is {Num2}</h1>
        <button
          onMouseEnter={() => {
            setNum(Num + 1);
          }}
          onMouseLeave={() => {
            setNum2(Num2 + 100);
          }}
        >
          Click
        </button>
      </div>
      <div>
        <h1> A is {A}</h1> 
        <h1>B is {B}</h1>
        <button
          onClick={() => {
            setA(A + 1);
          }}
        >
          Change A
        </button>
        <button
          onClick={() => {
            setB(B - 1);
          }}
        >
          Change A
        </button>
      </div>
    </div>
  );
};

export default App;

// Notes

// 1. using useState with useEffect (called mounting). so whenever the state changes the useEffect runs.

// 2. using useEffect with an empty array . useEfect only run one time
