import { useState } from "react";
import { dataSesiSemangat } from "../data/dataSesiSemangat";
import ModalSesiSemangat from "../components/ModalSesiSemangat";

function SesiSemangat() {
  const [visibleModal, setVisibleModal] = useState(false);

  const modalTampil = () => setVisibleModal(true);

  return (
    <>
      <div
        className="py-2 px-2 max-w-sm mx-auto font-fireshipnormal bg-gray-100 sm:max-w-2xl xl:max-w-full"
        id="sesisemangat"
      >
        <div className="px-2 flex flex-col xl:max-w-xl mx-auto xl:py-4">
          <h1 className="text-3xl text-center font-bold xl:text-6xl">
            #sesiSemangat💪
          </h1>
        </div>

        {visibleModal && (
          <ModalSesiSemangat tutupModal={() => setVisibleModal(false)} />
        )}

        <div
          className="flex flex-col sm:flex-row sm:max-w-2xl sm:flex-wrap sm:justify-around xl:max-w-full"
          onDoubleClick={modalTampil}
        >
          {dataSesiSemangat.map((semangat, key) => {
            return (
              <div
                key={key}
                className="flex flex-col my-1 bg-white px-2 py-2 text-center border-2 border-yellow-200 rounded-l-xl rounded-br-xl shadow-md hover:cursor-pointer  sm:w-52 sm:h-fit sm:justify-center xl:w-80 xl:p-4"
              >
                <span className="font-bold text-xl -mb-2 xl:text-3xl">"</span>
                <p className="font-bold text-sm xl:text-base">
                  {semangat.isiquote}
                </p>
              </div>
            );
          })}
        </div>

        {/* form isi quote */}
        <div className="sm:max-w-sm mx-auto xl:max-w-lg">
          <form action="">
            <div className="mb-2 mt-3  flex flex-col xl:mb-4">
              <span className="font-bold text-xl text-center bg-yellow-300 h-5 w-full xl:text-3xl">
                "
              </span>
              <textarea
                className="border border-gray-300 shadow rounded leading-tight pl-4 py-2 w-full focus:outline-none focus:shadow-outline resize-none font-bold text-sm xl:text-base"
                rows={3}
                placeholder="tuangkan pikiranmu disini ☕"
              ></textarea>
            </div>

            <div className="sm:place-self-center xl:pl-1">
              <input
                className="bg-gray-50 border border-yellow-300 font-bold font-fireshipnormal  rounded-md cursor-pointer shadow-md shadow-yellow-400 uppercase text-xs py-2 px-4 tracking-wider w-full sm:w-40 xl:text-md xl:py-3 xl:w-44  xl:tracking-widest xl:hover:-mt-1 xl:hover:mb-1"
                type="button"
                value="✏️ tambah quote"
              />
            </div>

            <p className="xl:font-bold py-3 text-rose-600 text-sm xl:text-base xl:max-w-lg">
              Note: kalau mau hapus klik 2x pada <i>quote</i>-nya.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SesiSemangat;
