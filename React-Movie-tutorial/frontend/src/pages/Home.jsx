import MovieCard from "../components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "One piece", release_date: "1999" },
    { id: 2, title: "Jujutsu kaisen", release_date: "2005" },
    { id: 3, title: "Demon Slayer", release_date: "2024" },
  ];
  return (
    <div className="home">
      <div className="movie-grid">
        
        {/* use this explicit return or  */}
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}

        {/* use this implicit return using () */}
        {/* {movies.map((movie)=>(
            <MovieCard movie={movie}  key={movie.id}
        ))} */}
      </div>
    </div>
  );
}

export default Home;
