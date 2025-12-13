import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="px-5 py-2 bg-cyan-600">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-700  active:scale-95 py-2 px-5 rounded cursor-pointer font-medium  m-4"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-700  active:scale-95 py-2 px-5 rounded cursor-pointer font-medium  m-4"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-700  active:scale-95 py-2 px-5 rounded cursor-pointer font-medium  m-4"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
