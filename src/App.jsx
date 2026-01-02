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
      <Layanan gambar={"./image/row.jpg"} namaLayanan={"SPECT SCAN"} keterangan={"SPECT scan merupakan salah satu inovasi dalam kedokteran nuklir yang dapat mengevaluasi kondisi tubuh Sahabat MIKA dan mendeteksi kanker secara lebih akurat."}/>
      <Layanan gambar={"./image/dikdik.jpg"} namaLayanan={"PET SCAN"} keterangan={"PET scan merupakan salah satu inovasi dalam kedokteran nuklir yang dapat mendeteksi kanker secara lebih akurat"}/>
      <Layanan gambar={"./image/mata.jpg"} namaLayanan={"EYECENTRIC"} keterangan={"Layanan ini dirancang untuk memberikan solusi menyeluruh bagi kesehatan mata Anda dengan teknologi terkini dan penanganan medis terbaik"}/>
      <Layanan gambar={"./image/row.jpg"} namaLayanan={"NEURO & NEUROSUGERY"} keterangan={"Layanan Unggulan Neuro & Neurosurgery di HMC: Menyongsong Kesehatan Otak"}/>
      <Layanan gambar={"./image/gigi.png"} namaLayanan={"UROLOGI"} keterangan={"Spesialis Urologi adalah dokter yang menangani gangguan yang terjadi di saluran kemih dan reproduksi pria. Beberapa penyakit yang diperiksa spesialis urologi antara lain uretra, kelenjar adrenal, ureter, ginjal, dan lainnya."}/>
      <Layanan gambar={"./image/dikdik.jpg"} namaLayanan={"LAYANAN JANTUNG & BEDAH JANTUNG"} keterangan={"Layanan Unggulan Jantung & Bedah Jantung RS Premier Jatinegara – Komprehensif, Modern, dan Mengutamakan Keselamatan Pasien"}/>
      <Footer nama = "Hanz Medical Center"/>
    </>
  )
}

export default App
