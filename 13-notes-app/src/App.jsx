import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [Task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, details);

    const copyTask = [...Task];

    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
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
        {/* PEHLA INPUT */}
        <input
          className="px-5 py-2 font-medium border-2 w-full outline-none  rounded"
          type="text"
          placeholder="Enter Notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* DUSRA INPUT */}
        <textarea
          className="px-5 h-32 py-2 font-medium border-2 outline-none items-start flex-row w-full rounded"
          placeholder="Write Datails"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95  font-medium w-full outline-none  text-black border-2 rounded px-5 py-2">
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
          {Task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="text-black p-4 font-bold leading-tight  h-52 w-40 rounded-2xl bg-white"
              >
                <div className=" w-full items-center capitalize  flex justify-center p-2 rounded-2xl bg-fuchsia-500">
                  <h3>{elem.title}</h3>
                </div>
                <p className="text-gray-500 m-2 ">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
