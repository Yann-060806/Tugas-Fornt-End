import Layanan from "../../components/Layanan/Layanan.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import dataLayanan from "../../data.json";
import { useState } from "react";

const Layanann = () => {
  const [cari, setCari] = useState("");

  const hasilCari = dataLayanan.filter((i) =>
    i.nama_layanan.toLowerCase().includes(cari.toLowerCase()),
  );

  return (
    <div>
      <Header />
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
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
      <Footer />
    </div>
  );
};

export default Layanann;
