import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Profile from "./components/Profile/Profile"
import Dokter from "./components/Dokter/Dokter"
import Layanan from "./components/Layanan/Layanan"

function App() {

  return (
    <>
      <Header HMC={"Hanz Medical Center"}/>
      <Profile/>
      <h2>&#10084; Daftar Dokter Terbaik &#10084;</h2>
      <Dokter nama={"dr Beli Dermawan"} umur={35} spesialis={"Penyakit Dalam"}/>
      <Dokter nama={"dr Kira Larasati"} umur={25} spesialis={"Poli Anak"}/>
      <Dokter nama={"dr Robert Marisa"} umur={30} spesialis={"Bedah Umum"}/>
      <h2>&#10084; Layanan & Fasilitas Kami &#10084;</h2>
      <Layanan/>
      <Footer nama = "Hanz Medical Center"/>
    </>
  )
}

export default App
