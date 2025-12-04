import axios from "axios";
import { useState } from "react";

const App = () => { 

  const [data, setData] = useState([]);

  const getData = async () => {
    // CALLING USING fetch
    // console.log('data get')

    // const response = await fetch("https://jsonplaceholder.typicode.com/albums");

    // const data = await response.json()
    // console.log(data);

    // USING AXIOS
    const imageData = await axios.get("https://picsum.photos/v2/list");

    console.log(imageData.data);
    setData(imageData.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3 key={idx}>
              hello, {elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
