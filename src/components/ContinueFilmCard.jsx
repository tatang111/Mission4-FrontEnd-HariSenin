import { fetchMovies } from "../store/redux/MovieRedux.";
import { ArrowScrollXContinue } from "./ArrowScrollXContinue";
import { LandscapeCardFilm } from "./LandscapeCardFilm";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export const ContinueFilmCard = () => {
  const dispatch = useDispatch();
  const { allMovies, loading } = useSelector((state) => state.movie); // adjust reducer name if different
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = allMovies
    .filter((movie) => movie?.id > 50 && movie?.id < 65)
    .map((movie) => ({ ...movie, new_episode: false }));

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="continueWatch flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">Melanjutkan Nonton Film</h1>
      <div className="relative">
        <ArrowScrollXContinue containerRef={scrollContainerRef} width="1215px" />
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {filteredMovies.map((movie) => (
            <LandscapeCardFilm key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
