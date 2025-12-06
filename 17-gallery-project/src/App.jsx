import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setUserData(response.data);
    // console.log(response.data);
  };
  return (
    <div className="bg-black h-screen p-4 text-white">
      <button
        onClick={getData}
        className="bg-green-600 px-5 py-2 mb-3  active:scale-95 rounded text-white"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
