import seruni from "../../public/seruni.png";
import mukmin from "../../public/mukmin.png";
// import miniproposal from "../../public/miniproposal.jpg";

function TentangKita() {
  return (
    <>
      <div className="bg-gray-100" id="tentangkita">
        <div className="grid grid-cols-1 xl:grid-cols-2 font-fireshipnormal mb-4">
          <h1 className="xl:hidden text-3xl py-2 text-center font-bold xl:text-6xl">
            Tentang Kita👩‍🎓👨‍🎓
          </h1>

          <div className="px-4 max-w-sm mx-auto  sm:max-w-2xl xl:order-2 xl:max-w-xl xl:mx-0">
            <h1 className="hidden text-5xl py-2 text-center font-bold xl:block">
              TENTANG KITA👩‍🎓👨‍🎓
            </h1>
            <p className="sm:text-lg xl:text-xl indent-4 mb-2">
              Website ini untuk kelas A Teknik Informatika Universitas Dayanu
              Ikhsanuddin angkatan 2020. Kelas{" "}
              <span className="bg-yellow-300 rounded-md px-1">
                si paling <i>ambis</i>
              </span>{" "}
              untuk <i>camlaude</i>, cepat lulus. Entah apa yang dikejar mungkin
              untuk segera nikah? Dapat kerja yang layak biar tidak jadi beban
              keluarga lagi? Membuat orang tuanya bangga melihat anaknya bisa
              melangkah jauh? Atau mau cepat-cepat lanjut S2? Apapun "sesuatu
              itu", hal tersebut pasti layak untuk diperjuangkan.
            </p>

            <p className="sm:text-lg xl:text-xl indent-4">
              Waktu terus berjalan begitu juga dengan kehidupan kita,{" "}
              <span className="bg-yellow-300 rounded-md px-1">
                semua pasti berlalu.
              </span>{" "}
              Akan ada masa kita telah propsal, telah skripsi, telah wisuda,
              telah pengangguran, telah kerja, telah ada pasangan, telah
              berkeluarga, telah tiada🤔🤔🤔; atau telah saling melupakan karena
              fokus pada jalannya masing-masing;{" "}
              <i>it's fine people come and go</i> (ada yang datang dan pergi)
              dan itu adalah hal yang wajar. seperti salah satu <i>quote</i>{" "}
              terkenal di internet{" "}
              <b>"disatukan oleh pendidikan dipisahkan oleh masa depan"</b>
            </p>
          </div>

          <div className="mt-4 xl:order-1 max-w-sm mx-auto sm:max-w-2xl sm:flex sm:justify-between xl:flex-col xl:items-center">
            <div className="mx-4 mb-2 flex  border-4 border-gray-100 shadow-md shadow-gray-400 rounded-md sm:w-2/4 sm:h-28 xl:w-4/5 xl:h-2/5 xl:border-8">
              <img
                src={mukmin}
                className="w-1/2 h-28 sm:h-auto rounded-md  object-cover border-r-4 border-yellow-300 xl:border-r-8"
                alt="seruni"
              />

              <div className="py-1 flex flex-col justify-between px-2">
                <div>
                  <h2 className="font-bold text-smn xl:text-2xl">
                    Muh. Mukmin, S.Kom., M.T.
                  </h2>
                  <h2 className="text-sm xl:text-xl">0920118301</h2>
                </div>
                <span className="text-base xl:text-2xl">Dosen PA</span>
              </div>
            </div>

            <div className="border-4 h-1 border-yellow-300 xl:block hidden w-4/5"></div>

            <div className="mx-4 mb-2 flex  border-4 border-gray-100 shadow-md shadow-gray-400 rounded-md sm:w-2/4 sm:h-28 xl:w-4/5 xl:h-2/5 xl:border-8">
              <div className="py-1 flex flex-col justify-between px-2 text-right">
                <div>
                  <h2 className="font-bold text-smn xl:text-2xl">
                    Seruni Dwi Cahyani Suyono
                  </h2>
                  <h2 className="text-sm xl:text-xl">20650014</h2>
                </div>
                <span className="text-base xl:text-2xl">Ketua Tingkat</span>
              </div>
              <img
                src={seruni}
                className="w-1/2 h-28 sm:h-auto rounded-md  object-cover border-l-4 border-yellow-300 xl:border-l-8"
                alt="seruni"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TentangKita;
