import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cyan-900 flex py-4 px-8 justify-between">
      <h2 className="font-bold text-xl">Sheryians</h2>
      <div className="flex gap-8">
        <a className="font-bold text-lg" href="/">Home</a>
        <a className="font-bold text-lg" href="/about">About</a>
        <a className="font-bold text-lg" href="/contact">Section</a>
      </div>
    </div>
  );
};

export default Navbar;
