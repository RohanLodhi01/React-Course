import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "One piece", release_date: "1999" },
    { id: 2, title: "Jujutsu kaisen", release_date: "2005" },
    { id: 3, title: "Demon Slayer", release_date: "2024" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {/* use this explicit return or  */}
        {/* {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })} */}

        {/* use this implicit return using () */}
        {movies.map((movie) => (
          // logic for movie search
          // movie.title.toLowerCase().startsWith(searchQuery) &&
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
