import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/redux/MovieRedux.";
import { ArrowScrollXContinue } from "./ArrowScrollXContinue";
import { LandscapeCardSeries } from "./LandscapeCardSeries";

export const ContinueSeriesCard = () => {
  const dispatch = useDispatch();
  const { allMovies, loading } = useSelector((state) => state.movie);
  const [movies, setMovies] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, allMovies.length]);

  useEffect(() => {
    const filteredMovies = allMovies.filter(
      (movie) => movie?.id > 32 && movie?.id < 49
    );
    setMovies(filteredMovies);
  }, [allMovies]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="continueWatch flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">
        Melanjutkan Nonton Series
      </h1>
      <div className="relative">
        <ArrowScrollXContinue containerRef={scrollContainerRef} width="1215px" />
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {movies.map((movie) => (
            <LandscapeCardSeries key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
