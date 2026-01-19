import { useState } from "react";
import "./components/Layanan/Layanan.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dokter from "./components/Dokter/Dokter";
import Layanan from "./components/Layanan/Layanan";
import Heroo from "./components/Hero/Hero";
import data from "./data.json";

function App() {
  const [cari, setCari] = useState("");

  const hasilCari = data.filter((i) =>
    i.nama_layanan.toLowerCase().includes(cari.toLowerCase())
  );

  return (
    <>
      <Header HMC={"Hanz Medical Center"} />
      <Heroo hero={"./image/gedung.png"} />
      <Profile />
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "3rem",
          color: "#0c77ce",
        }}
      >
        {" "}
        Daftar Dokter Terbaik{" "}
      </h1>
      <div className="card-wraper">
        <Dokter
          imgDok={"./image/dokbel.png"}
          nama={"dr Beli Dermawan"}
          umur={35}
          spesialis={"Penyakit Dalam"}
        />
        <Dokter
          imgDok={"./image/dokkir.png"}
          nama={"dr Kira Larasati"}
          umur={25}
          spesialis={"Poli Anak"}
        />
        <Dokter
          imgDok={"./image/dokbet.png"}
          nama={"dr Robert Marisa"}
          umur={30}
          spesialis={"Bedah Umum"}
        />
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "3rem",
          color: "#0c77ce",
        }}
      >
        &#10084; Layanan & Fasilitas Kami &#10084;
      </h1>
      <div className="input">
        <input
          type="text"
          placeholder="Cari Layanan..."
          value={cari}
          onChange={(c) => setCari(c.target.value)}
        />
      </div>
      <div className="card-wraper2">
        {hasilCari.length > 0 ? (
          hasilCari.map((item, index) => (
            <Layanan
              key={index}
              gambar={`./image/${item.img}`}
              namaLayanan={item.nama_layanan}
              keterangan={item.keterangan}
            />
          ))
        ) : (
          <p className="p">Layanan tidak ditemukan !!!</p>
        )}
      </div>
      <Footer nama="Hanz Medical Center" />
    </>
  );
}

export default App;
