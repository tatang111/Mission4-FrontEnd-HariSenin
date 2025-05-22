import {
  faBackward,
  faCheck,
  faExpand,
  faForward,
  faForwardStep,
  faGaugeHigh,
  faListUl,
  faMessage,
  faPause,
  faPlay,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useContext } from "react";
import { LeftbarPlay } from "../components/LeftbarPlay";
import { ShowBukaBahasa } from "../components/ShowBukaBahasa";
import { ShowBukaKecepatan } from "../components/ShowBukaKecepatan";
import { ShowNextEpisode } from "../components/ShowNextEpisode";
import { ShowAllEpisode } from "../components/ShowAllEpisode";
import { AllReasonSubscribe } from "../components/AllReasonSubscribe";
import { VideoNonSubscribe } from "../components/VideoNonSubscribe";

export const WatchSeries = () => {
  const [showControls, setShowControls] = useState(false);
  const [controlsTimeout, setControlsTimeout] = useState(null);
  const [bukaBahasa, setBukaBahasa] = useState(false);
  const [bukaKecepatan, setBukaKecepatan] = useState(false);
  const [nextEpisode, setNextEpisode] = useState(false);
  const [allEpisode, setAllEpisode] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(() => {
    const saved = localStorage.getItem("isSubscribe")
    return saved ? JSON.parse(saved) : null
  })

  const hideControls = () => {
    if (controlsTimeout) clearTimeout(controlsTimeout);
    setControlsTimeout(setTimeout(() => setShowControls(false), 3000));
  };

  const handleScreenTap = () => {
    setShowControls(!showControls);
    hideControls();
  };

  useEffect(() => {
    hideControls();
    return () => {
      if (controlsTimeout) clearTimeout(controlsTimeout);
    };
  }, []);

  return (
    <main>
      <div
        className={`bg-[url('/tonton/tontonseries.png')] w-full h-screen bg-cover bg-center overflow-hidden fixed touch-none group ${
          isSubscribe ? "" : "brightness-45"
        } `}
        onClick={handleScreenTap}
      >
        {/* Centered Pause Button - Responsive Size */}
        <div className="text-white text-3xl md:text-5xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
          <FontAwesomeIcon icon={faPause} />
        </div>

        {/* Skip Intro Button - Mobile Positioning */}
        <button className="bg-white text-black absolute right-4 md:right-20 bottom-24 md:bottom-30 rounded-full px-3 py-1 md:px-6 md:py-2 text-sm md:text-base opacity-0 md:group-hover:opacity-100 transition duration-300">
          Lewati intro
        </button>

        {bukaBahasa && <ShowBukaBahasa />}
        {bukaKecepatan && <ShowBukaKecepatan />}
        {nextEpisode && <ShowNextEpisode />}
        {allEpisode && <ShowAllEpisode />}

        {/* Controls Bar - Mobile Optimized */}
        <div
          className={`
          bg-[#181A1C99] w-full h-[70px] md:h-[96px] flex items-center justify-between py-3 px-4 md:py-7 md:px-10 text-white absolute 
          transition-all duration-300
          ${showControls ? "bottom-0" : "-bottom-[70px] md:-bottom-[96px]"}
          md:group-hover:bottom-0
          `}
        >
          {/* Left Controls Group */}
          <LeftbarPlay />

          {/* Center Title - Hidden on mobile if needed */}
          <div className="text-sm md:text-lg hidden sm:block">
            A man Called Otto
          </div>

          {/* Right Controls Group */}
          <div className="flex gap-3 md:gap-5 text-lg md:text-2xl items-center">
            <div className="opacity-100 lg:opacity-100 flex gap-5">
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={() => setNextEpisode(!nextEpisode)}
                icon={faForwardStep}
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={() => setAllEpisode(!allEpisode)}
                icon={faListUl}
              />
            </div>
            <FontAwesomeIcon
              className="cursor-pointer text-base md:text-xl"
              onClick={() => setBukaBahasa(!bukaBahasa)}
              icon={faMessage}
            />
            <FontAwesomeIcon
              className="cursor-pointer text-base md:text-xl"
              onClick={() => setBukaKecepatan(!bukaKecepatan)}
              icon={faGaugeHigh}
            />
            <FontAwesomeIcon
              className="text-base md:text-xl cursor-pointer"
              icon={faExpand}
            />
          </div>
        </div>
      </div>
      {!isSubscribe && (
        <div className="w-[600px] top-1/2 left-1/2 -translate-1/2 bg-cover bg-center overflow-hidden fixed touch-none group text-white">
          <VideoNonSubscribe />
        </div>
      )}
    </main>
  );
};
