import { ContinueSeriesCard } from "../components/ContinueSeriesCard";
import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/Navbar";
import { RatingFilmCard } from "../components/RatingFilmCard";
import { ReleaseFilmCard } from "../components/ReleaseFilmCard";
import { SeriesPersembahan } from "../components/SeriesPersembahan";
import { TrendingFilmCard } from "../components/TrendingFilmCard";
import { PopupDetailSeries } from "../components/PopupDetailSeries";
import { useDispatch, useSelector } from "react-redux";
import { setDetailClickingSeries } from "../store/redux/MovieRedux.";

export const Series = () => {
  const { detailClickingSeries } = useSelector(state => state.movie);
  const dispatch = useDispatch()
  
  return (
    <main>
      <section
        className={`text-white relative w-full bg-black ${
          detailClickingSeries ? "brightness-35" : ""
        } `}
      >
        <Navbar genre={true} />
        <MainLayout
          src="https://image.tmdb.org/t/p/original//ogDXuVkO92GcETZfSofXXemw7gb.jpg"
          title="One Piece Film Red"
          desc={`Uta — penyanyi paling dicintai di dunia, dikenal dengan suara "dari dunia lain" yang ia nyanyikan secara anonim. Untuk pertama kalinya, ia akan menggelar konser langsung. Tempat pertunjukan dipenuhi penggemarnya, termasuk bajak laut, Angkatan Laut, dan Topi Jerami pimpinan Luffy. Saat yang dinanti pun tiba: suara magisnya akhirnya bergema.`}
          genre={true}
        />
        <div className="flex flex-col mt-10 px-6 md:px-12 gap-12">
          <ContinueSeriesCard />
          <SeriesPersembahan />
          <RatingFilmCard />
          <TrendingFilmCard />
          <ReleaseFilmCard />
        </div>
        <footer className="md:mt-[70px] mt-[20px]">
          <Footer />
        </footer>
      </section>
      {detailClickingSeries && (
        <article className="absolute z-50 top-[350px] md:top-[520px]  left-1/2 -translate-x-1/2 flex  md:items-center justify-center">
          <PopupDetailSeries onClose={() => dispatch(setDetailClickingSeries(false))} />
        </article>
      )}
    </main>
  );
};
