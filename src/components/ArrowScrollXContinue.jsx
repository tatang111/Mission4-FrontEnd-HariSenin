import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export const ArrowScrollXContinue = ({ containerRef }) => {
  const { detailClickingSeries, detailClickingFilm } = useSelector(state => state.movie)

  const handleScrollRight = () => {
    if (containerRef.current && !detailClickingSeries && !detailClickingFilm ) {
      containerRef.current.scrollBy({
        left: 800,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current && !detailClickingSeries && !detailClickingFilm) {
      containerRef.current.scrollBy({
        left: -800,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`hidden md:flex absolute w-[1215px] h-[168px]  -left-5 justify-between items-center`}
    >
      <button
        disabled={detailClickingSeries || detailClickingFilm}
        onClick={handleScrollLeft}
        className={`hidden md:block  cursor-pointer bg-[#BDBDBD] hover:bg-[#929191] z-100 w-10 h-10 rounded-full ${detailClickingSeries ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        disabled={detailClickingSeries || detailClickingFilm}
        onClick={handleScrollRight}
        className={`hidden md:block  cursor-pointer bg-[#BDBDBD] hover:bg-[#929191] z-100 w-10 h-10 rounded-full ${detailClickingSeries ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <FontAwesomeIcon icon={faArrowRight} />{" "}
      </button>
    </div>
  );
};
