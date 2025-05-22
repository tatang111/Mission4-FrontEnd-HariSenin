import { Link } from "react-router-dom";
import { PotraitCard } from "./PotraitCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/redux/MovieRedux."; // ✅ Capital M

export const DaftarSayaMainProfil = () => {
  const dispatch = useDispatch();
  const { allMovies, loading } = useSelector((state) => state.movie);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, allMovies.length]);

  useEffect(() => {
    const getMovie = allMovies
      .filter((movie) => movie.id > 10 && movie.id < 16)
      .map((movie) => ({ ...movie, premium: false }));
    setMovies(getMovie);
  }, [allMovies]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="md:px-20 px-5 flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <span className="text-3xl font-[600]">Daftar Saya</span>
        <Link to="/daftarsaya" className="cursor-pointer hover:underline">
          Lihat Semua
        </Link>
      </div>
      <div className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <PotraitCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
