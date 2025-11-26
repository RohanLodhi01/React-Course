import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex justify-between items-start   p-10">
        <div className="flex w-1/2 items-start gap-4 flex-col">
          <input
            className="px-5 py-2 border-2 w-full  rounded"
            type="text"
            placeholder="Enter Notes heading"
          />
          <input
            className="px-5 h-20 py-2  border-2 w-full rounded"
            placeholder="Write Datails"
          />
          <button className="bg-white w-full  text-black border-2 rounded px-5 py-2">
            Add Note
          </button>
        </div>
        <img
          className=" h-56"
          src="https://www.pngall.com/wp-content/uploads/8/Hand-Writing-PNG-HD-Image-1.png"
          alt=""
        />
      </form>
    </div>
  );
};

export default App;
