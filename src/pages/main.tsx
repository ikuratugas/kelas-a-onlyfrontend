import miniproposal from "../../public/miniproposal.jpg";

function Main() {

  return (
    <div className="bg-slate-100 sm:bg-gray-100 xl:bg-gray-100">
      <div className="grid xl:grid-cols-2">
        <div className="px-4 py-4 max-w-sm mx-auto sm:max-w-2xl sm:px-6 xl:max-w-4xl xl:my-auto xl:px-10">
          <div className="xl:pb-6">
            <h1 className="font-extrabold font-fireshipnormal text-3xl text-gray-900 sm:text-4xl sm:py-1 sm:px-2">
              クラ<span className="bg-yellow-300 px-2 rounded-full">ス -</span>A
            </h1>
          </div>

          <img
            className="rounded-lg h-60 w-full object-cover mt-4 shadow-md shadow-gray-400 sm:h-80 sm:object-bottom xl:hidden" src={miniproposal} alt="miniproposal"
          />

          <h1 className="mt-5 mb-2 text-xl font-bold font-fireshipnormal uppercase sm:text-2xl xl:text-6xl xl:mb-5"><span className="bg-yellow-300 rounded px-1 xl:rounded-2xl">Semua informasi kelas ada disini.</span> Biar <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">@adam</span> tidak banyak tanya di <i>grub</i>.
          </h1>

          <p className="text-base font-fireshipnormal text-gray-900 mb-5 sm:text-lg sm:indent-4 xl:text-xl xl:mb-8">
            Ada ka tidak ini tugas🤔🤔🤔 Cek sini{" "}
            <span className="underline font-bold decoration-blue-500 cursor-pointer">
             <a href="#tugaskuliah">#tugasKuliah</a>
              {/* <Link to={'/tetang'}>coba</Link> */}
            </span>
            🚩Butuh motivasi tapi <i>ndaa</i> ada ayang🥹 atau ingin{" "}
            <i>curhat</i>, tenang semua tertampung di{" "}
            <span className="underline font-bold decoration-orange-400 cursor-pointer">
              <a href="#sesisemangat">#sesiSemangat💪</a>
            </span>{" "}
            Mau mengingat masa yang pernah ada 👉
            <span className="underline font-bold decoration-green-600 cursor-pointer">
              <a href="#galeri">#galeri🖼️</a>
            </span>
          </p>

          <div className="xl:pb-9">
            <span className="bg-gray-50 border border-yellow-300 font-bold font-fireshipnormal rounded-md shadow-md shadow-yellow-400 uppercase text-xs py-2 px-4 tracking-wider sm:text-sm hover:cursor-pointer hover:-mt-1 hover:mb-1 xl:inline-block ">
              <a href="#tentangkita">Tentang Kita👩‍🎓👨‍🎓</a>
            </span>
          </div>
        </div>

        {/* gambar besar muncul ketika ukuran xl */}
        <div className="hidden relative xl:block">
          <img className="absolute inset-0 w-full h-full object-cover" src={miniproposal} alt="miniproposal"/>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
