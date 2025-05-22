import { useContext } from "react";
import { ContinueFilmCard } from "../components/ContinueFilmCard";
import { ContinueSeriesCard } from "../components/ContinueSeriesCard";
import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/Navbar";
import { RatingFilmCard } from "../components/RatingFilmCard";
import { ReleaseFilmCard } from "../components/ReleaseFilmCard";
import { SeriesPersembahan } from "../components/SeriesPersembahan";
import { TrendingFilmCard } from "../components/TrendingFilmCard";
import { PopupDetailFilm } from "../components/PopupDetailFilm";
import { useDispatch, useSelector } from "react-redux";
import { setDetailClickingFilm } from "../store/redux/MovieRedux.";

export const Film = () => {
  const { detailClickingFilm } = useSelector(state => state.movie)
  const dispatch = useDispatch()

  return (
    <main>
      <div
        className={`text-white relative w-full bg-black ${
          detailClickingFilm ? "brightness-35" : ""
        } `}
      >
        <Navbar genre={true} />
        <MainLayout
          src="https://image.tmdb.org/t/p/original//yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
          title="A Minecraft Movie"
          desc="Empat orang yang tidak cocok harus berjuang menghadapi masalah-masalah biasa ketika mereka tiba-tiba ditarik melalui portal misterius ke Overworld: dunia ajaib berbentuk kubus yang aneh yang berkembang pesat berkat imajinasi. Untuk kembali ke rumah, mereka harus menguasai dunia ini sambil memulai perjalanan ajaib dengan seorang perajin ahli yang tak terduga, Steve."
          genre={true}
        />
        <section className="flex flex-col mt-10 px-6 md:px-12 gap-12">
          <ContinueFilmCard />
          <SeriesPersembahan />
          <RatingFilmCard />
          <TrendingFilmCard />
          <ReleaseFilmCard />
        </section>
        <footer className="md:mt-[70px] mt-[20px]">
          <Footer />
        </footer>
      </div>
      {detailClickingFilm && (
        <article className="absolute z-50 top-[350px] md:top-[520px]  left-1/2 -translate-x-1/2 flex  md:items-center justify-center">
          <PopupDetailFilm onClose={() => dispatch(setDetailClickingFilm(false))} />
        </article>
      )}
    </main>
  );
};
