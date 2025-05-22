import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
// import { PopupContext } from "../SharedContext";

export const ArrowScrollX = ({ containerRef }) => {
  const { detailClickingSeries, detailClickingFilm } = useSelector(state => state.movie)

  const handleScrollRight = () => {
    if (containerRef.current && !detailClickingSeries && !detailClickingFilm) {
      containerRef.current.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current && !detailClickingSeries && !detailClickingFilm) {
      containerRef.current.scrollBy({
        left: -1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden md:flex absolute w-[1210px] h-[330px]  -left-5 justify-between items-center pointer-events-none">
      <button
        disabled={detailClickingSeries || detailClickingFilm}
        onClick={handleScrollLeft}
        className={`hidden md:block  cursor-pointer bg-[#BDBDBD] hover:bg-[#929191] z-100 w-10 h-10 rounded-full pointer-events-auto ${
          detailClickingSeries ? "opacity-50 cursor-not-allowed" : ""
        } `}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        disabled={detailClickingSeries || detailClickingFilm}
        onClick={handleScrollRight}
        className={`hidden md:block  cursor-pointer bg-[#BDBDBD] hover:bg-[#929191] z-100 w-10 h-10 rounded-full pointer-events-auto ${
          detailClickingSeries ? "opacity-50 cursor-not-allowed" : ""
        } `}
      >
        <FontAwesomeIcon icon={faArrowRight} />{" "}
      </button>
    </div>
  );
};
