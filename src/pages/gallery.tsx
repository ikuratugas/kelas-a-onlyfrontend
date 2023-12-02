import { kumpulanfoto } from "../data/dataGallery";

function Gallery() {
  return (
    <div className="bg-gray-100 font-fireshipnormal mb-2" id="galeri">
      <div className="px-2 max-w-xs mx-auto sm:max-w-2xl xl:max-w-full">
        <h1 className="py-2 xl:py-4 text-3xl text-center font-bold xl:text-6xl">
          👉#galeri🖼️
        </h1>

        <div className="flex flex-wrap justify-center items-center sm:justify-between xl:justify-center">
          {/* card image */}
          {kumpulanfoto.map((kumpulan, key) => {
            return (
              <div key={key} className="py-1 px-1 w-full sm:w-2/4  xl:w-1/3">
                <div className="flex flex-col rounded-md bg-gray-50 shadow-md shadow-gray-400">
                  <img
                    src={kumpulan.gambar}
                    alt={kumpulan.alt}
                    className="rounded-t-md border-8 border-gray-50"
                  />
                  <p className="place-self-end font-bold pr-2 text-xs py-2 -mt-2 xl:text xl:text-sm">
                    {kumpulan.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
