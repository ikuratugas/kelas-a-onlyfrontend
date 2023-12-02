interface dataTugas {
  judul: string,
  hastag: string,
  batas: string,
}


// ini akan mengecek hastag dan memberikan pembeda warna
const sortirHastag = (batas:string, judul:string, hastag:string) =>{
  if (hastag === "#tugasKuliah"){
    return (
      <div className='rounded-lg px-4 pt-1 bg-gradient-to-r from-yellow-400 to-yellow-300'>
        {/* memanggil function detailTugas, daripada saya memperbanyak coding (copas) */}
        {detailTugas(hastag, judul, batas)}
      </div>
    )}
    else if (hastag === "#tugasPribadi"){
      return(
        <div className='rounded-lg px-4 pt-1 bg-gradient-to-r from-red-300 to-red-300'>
          {detailTugas(hastag, judul, batas)}
        </div>
    )}
    else if (hastag === "#acaraKelas") {
      return(
        <div className='rounded-lg px-4 pt-1 bg-gradient-to-r from-green-400 to-green-400'>
          {detailTugas(hastag, judul, batas)}
        </div>
    )}
    else if (hastag === "#tugasPeminatan") {
      return (
        <div className='rounded-lg px-4 pt-1 bg-gradient-to-r from-sky-400 to-sky-300'>
          {detailTugas(hastag, judul, batas)}
        </div>
    )}
}


// ini ada didalam function sortingHastag
const detailTugas = (hastag:string, judul:string, batas:string) => {
  return (
    <>
      <div className="flex pt-1 justify-between">
        <span className="text-sm font-bold sm:text-base">{hastag}</span>
        <span className="cursor-pointer hover:-mt-1 hover:mb-1 hover:font-bold">🗑</span>
      </div>

      <h1 className="text-sm sm:text-base xl:text-lg">{judul}</h1>

      <div className="flex flex-row-reverse py-1">
        <span className="font-bold text-xs sm:text-sm">🕓 {batas}</span>
      </div>
    </>
  )
}

function CardTugasKuliah(props:dataTugas){
  return (
    sortirHastag(props.batas, props.judul, props.hastag)
  )
}

export default CardTugasKuliah
