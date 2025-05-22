import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setDetailClickingFilm } from "../store/redux/MovieRedux.";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PotraitCard } from "../components/PotraitCard";
import { PopupDetailFilm } from "../components/PopupDetailFilm";

export const DaftarSaya = () => {
  const dispatch = useDispatch();
  const { detailClickingFilm, allMovies, loading } = useSelector((state) => state.movie);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, allMovies.length]);

  useEffect(() => {
    const filteredMovies = allMovies
      .filter((movie) => movie.id > 10 && movie.id < 25)
      .map((movie) => ({ ...movie, premium: false }));
    setMovies(filteredMovies);
  }, [allMovies]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={`bg-black text-white ${detailClickingFilm ? "brightness-35" : ""}`}>
        <Navbar />
        <main className="md:px-20 ml-4 my-[20px] md:my-[50px] flex flex-col gap-8">
          <h1 className="text-3xl font-[600]">Daftar Saya</h1>
          <div className="grid grid-cols-3 md:grid-cols-5 -ml-2 pr-2 gap-x-1 gap-y-5 md:gap-5">
            {movies.map((movie) => (
              <PotraitCard key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
        <Footer />
      </div>

      {detailClickingFilm && (
        <div className="absolute z-50 top-[100px] md:top-[100px] left-1/2 -translate-x-1/2 flex md:items-center justify-center">
          <PopupDetailFilm onClose={() => dispatch(setDetailClickingFilm(false))} />
        </div>
      )}
    </div>
  );
};
