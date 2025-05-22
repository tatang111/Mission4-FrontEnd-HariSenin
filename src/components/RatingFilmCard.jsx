import { fetchMovies } from "../store/redux/MovieRedux.";
import { ArrowScrollX } from "./ArrowScrollX";
import { PotraitCard } from "./PotraitCard";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export const RatingFilmCard = () => {
  const dispatch = useDispatch();
  const { allMovies, loading } = useSelector((state) => state.movie); // adjust if reducer is named differently
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const topRatedMovies = allMovies.filter(
    (movie) =>
      movie?.category1 === "top-rating" && (movie.id < 33 || movie.id > 65)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="top-film flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">
        Top Rating Film dan Series Hari Ini
      </h1>
      <div className="relative">
        <ArrowScrollX containerRef={scrollContainerRef} />
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {topRatedMovies.map((movie) => (
            <PotraitCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
