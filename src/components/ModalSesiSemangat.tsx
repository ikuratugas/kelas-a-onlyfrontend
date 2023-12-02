function ModalSesiSemangat(props:any){
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
          
            <span className="mb-2 place-self-end text-2xl font-bold cursor-pointer" onClick={() => props.tutupModal()}>💣</span>

            <div className="flex flex-col px-4 text-center gap-2">
              <p className=" font-bold">Yakin ini mau dihapus?</p>
              <span className="bg-yellow-300 rounded-lg py-2">iya, hapus saja</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalSesiSemangat