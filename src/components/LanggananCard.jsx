import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setVersiPembayaran } from "../store/redux/MovieRedux.";

export const LanggananCard = ({versi, price, akun, kualitas}) => {
  const dispatch = useDispatch()

    const handlePembayaran = () => {
        dispatch(setVersiPembayaran(versi))
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
    }

  return (
    <section className="bg-gradient-to-r rounded-lg  from-[#5370D4] to-[#192DB7] w-[270px] md:w-[236px] h-[410px] p-6 px-4 flex items-start  flex-col gap-6">
      <button className="px-4 py-2 bg-[#3D4142] text-white rounded-full items-start flex font-[600]">
        {versi}
      </button>
      <div>
        <p className="text-start text-base">Mulai dari Rp.{price}/Bulan </p>
        <p className="text-base text-start">{akun} Akun</p>
      </div>
      <div className="items-start text-start">
        <p>
          <FontAwesomeIcon icon={faCheck} /> Tidak Ada Iklan
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} /> Kualitas {kualitas}
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} /> Download Konten Pilihan
        </p>
      </div>
      <div className="border-b-2 w-full mt-5 mb-3 border-[#E7E3FC3B]"></div>
      <button onClick={handlePembayaran} className="bg-white rounded-full cursor-pointer hover:bg-stone-200 text-[#192DB7] w-full font-[600] text-xl py-2">
        Langganan
      </button>
      <p className="text-sm -mt-5 text-center w-full">
        Syarat dan Ketentuan Berlaku
      </p>
    </section>
  );
};
