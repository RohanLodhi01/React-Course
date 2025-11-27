import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 flex-col lg:w-1/2 items-start p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          className="px-5 py-2 font-medium border-2 w-full outline-none  rounded"
          type="text"
          placeholder="Enter Notes heading"
        />
        <textarea
          className="px-5 h-32 py-2 font-medium border-2 outline-none items-start flex-row w-full rounded"
          placeholder="Write Datails"
        />
        <button className="bg-white font-medium w-full outline-none  text-black border-2 rounded px-5 py-2">
          Add Note
        </button>

        {/* <img
          className=" h-56"
          src="https://www.pngall.com/wp-content/uploads/8/Hand-Writing-PNG-HD-Image-1.png"
          alt=""
        /> */}
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
