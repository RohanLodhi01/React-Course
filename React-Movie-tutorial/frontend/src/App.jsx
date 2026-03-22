import "./App.css";
import MovieCard from "./components/MovieCard";

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
      <MovieCard movie={{ title: "Tim's film", release_date: "2024" }} />
      <MovieCard movie={{ title: "One Piece", release_date: "1999" }} />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
