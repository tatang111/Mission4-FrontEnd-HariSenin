import { fetchMovies } from "../store/redux/MovieRedux."; 
import { ArrowScrollX } from "./ArrowScrollX";
import { PotraitCard } from "./PotraitCard";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TrendingFilmCard = () => {
  const dispatch = useDispatch();
  const { allMovies, loading } = useSelector((state) => state.movie);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, allMovies.length]);

  const trendingMovies = allMovies
    .filter(
      (movie) =>
        movie?.category2 === "film-trending" && (movie.id < 33 || movie.id > 65)
    )
    .map((movie) => ({ ...movie, premium: false }));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="top-film flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">Film Trending</h1>
      <div className="relative">
        <ArrowScrollX containerRef={scrollContainerRef} />
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {trendingMovies.map((movie) => (
            <PotraitCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
