import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-cyan-900 flex py-4 px-8 justify-between">
      <h2 className="font-bold text-xl">Sheryians</h2>
      <div className="flex gap-10">
        <Link className="font-medium text-lg" to='/'>Home</Link>
        <Link className="font-medium text-lg" to='about'>About</Link>
        <Link className="font-medium text-lg" to='courses'>Courses</Link>
        <Link className="font-medium text-lg" to='product'>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
