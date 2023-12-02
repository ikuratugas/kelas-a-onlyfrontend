import Gallery from "./pages/gallery"
import Main from "./pages/main"
import SesiSemangat from "./pages/sesiSemangat"
import TentangKita from "./pages/tentangKita"
import TugasKuliah from "./pages/tugaskuliah"



function App() {

  return (
    <>
        <Main/>
        <hr className="h-1 mb-1 border-t-0 bg-yellow-400 opacity-100 dark:opacity-50" />
        <hr className="h-0.5 mb-1 border-t-0 bg-yellow-300 opacity-100 dark:opacity-50" />
        <TugasKuliah/>
        <hr className="h-1 mb-1 border-t-0 bg-yellow-400 opacity-100 dark:opacity-50" />
        <hr className="h-0.5 mb-1 border-t-0 bg-yellow-300 opacity-100 dark:opacity-50" />
        <SesiSemangat />
        <hr className="h-1 mb-1 border-t-0 bg-yellow-400 opacity-100 dark:opacity-50" />
        <hr className="h-0.5 mb-1 border-t-0 bg-yellow-300 opacity-100 dark:opacity-50" />
        <Gallery />
        <hr className="h-1 mb-1 border-t-0 bg-yellow-400 opacity-100 dark:opacity-50" />
        <hr className="h-0.5 mb-1 border-t-0 bg-yellow-300 opacity-100 dark:opacity-50" />
        <TentangKita/>
    </>
  )
}

export default App
