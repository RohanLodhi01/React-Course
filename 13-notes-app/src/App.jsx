import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  // add the NOTE
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  // deletes the Note
  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
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
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="text-black p-4  h-52 w-40 rounded-2xl flex justify-between flex-col items-start bg-cover  bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210430/pngtree-yellow-vintage-note-paper-background-with-stripes-image_697102.jpg')]"
              >
                <div className=" w-full items-center capitalize  font-bold  justify-center p-2 rounded-2xl">
                  <h3 className="leading-tight text-lg">{elem.title}</h3>
                  <p className="text-gray-500 m-2 text-sm font-medium ">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full bg-red-600 text-white py-2 text-xs rounded font-bold cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
