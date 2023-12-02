

function ModalTugasKuliah (props:any){
  const diluarModal = (e:any) => {
    if (e.target.id === "sentuhLuarModal") {props.tutupModal()}
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-start" id="sentuhLuarModal" onClick={diluarModal}>
      {/*                  _membuat tidak terlalu di tengah jan sampe terhalang oleh keyboard ketika di mobile */}
      <div className="w-70 mt-20 sm:w-96">
        <div className="bg-white rounded-md p-4">
          {/* ini form tugas */}
          <form action="" className="flex flex-col">
            {/* logo bomb */}
            <p className="mb-2 place-self-end text-2xl font-bold cursor-pointer" onClick={() => props.tutupModal()}>💣</p>

            {/* dropdwon chatGPT yang buat */}
            <div className="mb-2 w-full max-w-sm font-bold font-fireshipnormal">
              <div className="relative border-l-4 rounded-sm border-yellow-300">
                <select className="block appearance-none w-full bg-white border border-gray-300  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>#tugasKuliah</option>
                  <option>#tugasPeminatan</option>
                  <option>#acaraKelas</option>
                  <option>#tugasPribadi</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">👇</div>
              </div>
            </div>

            {/* input judul tugasnya */}
            <div className="mb-2 border-l-4 rounded-sm  border-yellow-300">
              <textarea className="border border-gray-300 shadow rounded leading-tight pl-4 py-2 w-full focus:outline-none focus:shadow-outline resize-none" rows={3} placeholder="Apa tuch tugasnya🤔 "></textarea>
            </div>

            {/* input batas */}
            <div className="mb-4 place-self-start border-l-4 rounded-sm  border-yellow-300">
              <input type="text" className="border border-gray-300 shadow rounded leading-tight pl-4 p-1   focus:outline-none focus:shadow-outline w-32" maxLength={10} placeholder="Deadline 🕑"  required/>
            </div>

          <div className="sm:place-self-center">
            <input className="bg-gray-50 border border-yellow-300 font-bold font-fireshipnormal  rounded-md cursor-pointer shadow-md shadow-yellow-400 uppercase text-xs py-2 px-4 tracking-wider w-full sm:w-40" type="button" value="buat 📝" />
          </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalTugasKuliah