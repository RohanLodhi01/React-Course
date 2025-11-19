import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-16 ">
      <h4 className="bg-black text-white px-5 py-2 rounded-full uppercase">
        Target Audience
      </h4>
      <button className="bg-gray-200 rounded-full px-6 py-2 uppercase tracking-widest text-sm">
        digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
