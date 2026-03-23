import "./App.css";
import Home from "./pages/Home";

function App() {
  // Paretn component //

  // return (
  //   <>
  //     <Text display="what's up" />
  //     <Text display="hello" />
  //   </>
  // );
  return (
    <>
      <Home />
    </>
  );
}

// example of props

// function Text({ display }) {
//   return (
//     <div>
//       <p>{display}</p>
//     </div>
//   );
// }

export default App;
