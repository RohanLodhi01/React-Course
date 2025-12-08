import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );
  let printUserData = (
    <h3 className="text-gray-400 font-semibold  text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-54 rounded-xl overflow-hidden ">
              <img
                className="h-full w-full object-cover "
                src={elem.download_url}
                alt="images"
              />
            </div>
            <h2 className=" mt-3 p-2 text-center border-2 rounded-2xl font-bold text-lg">
              {elem.author}
            </h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/* <button
        onClick={getData}
        className="bg-green-600 px-5 py-2 mb-3  active:scale-95 rounded text-white"
        >
        Get Data
        </button> */}

      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          className="bg-amber-400 text-sm cursor-pointer font-semibold active:scale-95 text-black px-4 py-2 rounded"
          onClick={() => {
            // console.log("prev button clicked");
            if (index > 1) setIndex(index - 1);
            setUserData([]);
          }}
        >
          prev
        </button>
        <button
          className="bg-amber-400 text-sm cursor-pointer font-semibold active:scale-95 text-black px-4 py-2 rounded"
          onClick={() => {
            setUserData([]);
            console.log("next button clicked");
            setIndex(index + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
