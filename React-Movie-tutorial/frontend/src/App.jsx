import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  // Paretn component //

  // return (
  //   <>
  //     <Text display="what's up" />
  //     <Text display="hello" />
  //   </>
  // );
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
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
