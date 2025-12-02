import axios from "axios";

const App = () => {
  const getData = async () => {
    // CALLING USING fetch
    // console.log('data get')

    // const response = await fetch("https://jsonplaceholder.typicode.com/albums");

    // const data = await response.json()
    // console.log(data);


    // USING AXIOS 
    const imageData = await axios.get('https://jsonplaceholder.typicode.com/albums');

    console.log(imageData);

  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
