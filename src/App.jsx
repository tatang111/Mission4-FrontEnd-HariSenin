import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Profil } from "./pages/Profil";
import { DaftarSaya } from "./pages/DaftarSaya";
import { Series } from "./pages/Series";
import { Film } from "./pages/Film";
import {  WatchFilm } from "./pages/WatchFilm";
import { WatchSeries } from "./pages/WatchSeries";
import { Langganan } from "./pages/Langganan";
import { Daftar } from "./pages/Daftar";
import { Masuk } from "./pages/Masuk";
import { Edit } from "./pages/Edit";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Daftar />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/beranda" element={<MainPage />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/series" element={<Series />} />
        <Route path="/film" element={<Film />} />
        <Route path="/daftarsaya" element={<DaftarSaya />} />
        <Route path="/langganan" element={<Langganan />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/watchfilm" element={<WatchFilm />} />
        <Route path="/watchseries" element={<WatchSeries />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
