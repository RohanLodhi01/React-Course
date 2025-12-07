import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=15"
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(function () {
    getData();
  });
  let printUserData = <h3 className="text-gray-600">NO User Data Available</h3>;

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
            <h2 className=" mt-3 p-2 text-center border-2 rounded-2xl font-bold text-lg">{elem.author}</h2>
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

      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
