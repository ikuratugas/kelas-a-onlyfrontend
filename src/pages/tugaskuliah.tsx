import { useState } from "react";
import CardTugasKuliah from "../components/CardTugasKuliah";
import ModalTugasKuliah from "../components/ModalTugasKuliah";
import { datatugas } from "../data/dataTugas";
function TugasKuliah() {
  // ============= DATA DUMMY ===========================
  // telah dipindahkan perhatikan bagian import ada {datatugas} check saja nanti resourcenya
  // ============= BATAS DATA DUMMY =====================

  const [visibleModal, setVisibleModal] = useState(false);

  const modalTampil = () => setVisibleModal(true);

  return (
    // <div className="bg-gradient-to-b from-gray-100 via-yellow-200 to-yellow-100">
    <div className="bg-gray-100 py-2" id="tugaskuliah">
      <div className="mx-auto max-w-sm sm:max-w-2xl xl:grid xl:grid-cols-2 xl:max-w-full">
        <div className="px-2 font-fireshipnormal flex flex-col gap-2 text-center sm:text-left sm:px-8 xl:w-11/12 xl:gap-4">
          <h1 className="text-3xl text-center font-bold xl:text-6xl">
            #tugasKuliah🚩
          </h1>
          <p className="sm:text-lg xl:text-xl xl:indent-12">
            Penghilang lupa ya.. catat. disini menampung tugas-tugasnya kita
            bahkan sampai yang pribadi "kalau mau". 🙇Mohon bantuannya untuk
            diisi dan bila sudah lewat batas tolong dihapus; terutama{" "}
            <span className="text-blue-400 font-bold">@ida🫰</span> dan{" "}
            <span className="text-blue-400 font-bold">@almin🙏</span> kami
            mengandalkanmu.
          </p>
          {/* tombol ini akan hilang{tersebmyi} ketika layar dekstop */}
          <span
            className=" bg-gray-50 border border-yellow-300 font-bold font-fireshipnormal  rounded-md cursor-pointer shadow-md shadow-yellow-400 uppercase text-xs py-2 px-4 tracking-wider sm:text-sm sm:w-60 sm:text-center sm:place-self-center sm:my-3 xl:hidden"
            onClick={modalTampil}
          >
            tambah tugas 📝
          </span>
          
          {/* menampilkan popup di tablet dan mobile */}
          {visibleModal && (
            <ModalTugasKuliah tutupModal={() => setVisibleModal(false)} />
          )}
          {/* ----------------------------------- /> */}

          {/* ini akan muncul ketika di dekstop */}
          <h3 className="hidden xl:block place-self-center text-base font-bold text-rose-600">
            ko isimi, biar ada juga isinya ni barang!!!
          </h3>
          <div className="hidden w-full xl:block">
            <form action="" className="mb-4">
              <div className="mb-2 w-full max-w-sm font-bold font-fireshipnormal xl:text-lg xl:mb-3 xl:max-w-xl">
                <div className="relative border-l-4 rounded-sm border-yellow-300">
                  <select className="block appearance-none w-full bg-white border border-gray-300  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>#tugasKuliah</option>
                    <option>#tugasPeminatan</option>
                    <option>#acaraKelas</option>
                    <option>#tugasPribadi</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 xl:text-xl">
                    👇
                  </div>
                </div>
              </div>

              <div className="mb-2 border-l-4 rounded-sm border-yellow-300 xl:mb-3">
                <textarea
                  className="border border-gray-300 shadow rounded leading-tight pl-4 py-2 w-full focus:outline-none focus:shadow-outline resize-none xl:text-lg"
                  rows={4}
                  placeholder="Apa tuch tugasnya🤔 "
                ></textarea>
              </div>

              {/* input batas */}
              <div className=" place-self-start border-l-4 rounded-sm border-yellow-300 xl:mb-5">
                <input
                  type="text"
                  className="border border-gray-300 shadow rounded leading-tight pl-4 p-1 focus:outline-none focus:shadow-outline w-32 xl:text-lg xl:w-40"
                  maxLength={10}
                  placeholder="Deadline 🕑"
                  required
                />
              </div>

              <div className="sm:place-self-center xl:pl-1">
                <input
                  className="bg-gray-50 border border-yellow-300 font-bold font-fireshipnormal  rounded-md cursor-pointer shadow-md shadow-yellow-400 uppercase text-xs py-2 px-4 tracking-wider w-full sm:w-40 xl:text-md xl:py-3  xl:tracking-widest hover:-mt-1 hover:mb-1"
                  type="button"
                  value="tambah tugas 📝"
                />
              </div>
            </form>
          </div>{" "}
          {/* akhir form in dekstop */}
        </div>

        <div className="py-2 px-2 sm:max-w-2xl  flex flex-col  flex-wrap justify-around sm:flex-row xl:max-w-full xl:justify-center xl:items-center xl:order-first xl:w-auto ">
          {/* pengulanan data dari data dummmy */}
          {datatugas.map((tugas, i) => {
            return (
              <div
                key={i}
                className="text-gray-800 font-fireshipnormal py-1 sm:w-72 xl:w-52 xl:px-1"
              >
                <CardTugasKuliah
                  judul={tugas?.judul}
                  batas={tugas?.batas}
                  hastag={tugas.hastag}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TugasKuliah;
