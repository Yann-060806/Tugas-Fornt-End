import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import Dokter from "../../components/Dokter/Dokter.jsx";
import Layanan from "../../components/Layanan/Layanan.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import dataLayanan from "../../data.json";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
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
        Dokter Terbaik{" "}
      </h1>
      <div className="card-wraper">
        <Dokter
          imgDok={"../../public/image/dokbel.png"}
          nama={"dr Beli dermawan"}
          umur={31}
          spesialis={"Penyakit Dalam"}
        />
        <Dokter
          imgDok={"../../public/image/dokkir.png"}
          nama={"dr Kira Larasati"}
          umur={25}
          spesialis={"Anak dan Pendekatan Komunikatif"}
        />
        <Dokter
          imgDok={"../../public/image/dokbet.png"}
          nama={"dr Robert Marisa"}
          umur={33}
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
        &#10084; Layanan & Fasilitas Unggulan Kami &#10084;
      </h1>
      <div className="card-wraper2">
        {dataLayanan.slice(0, 3).map((item, index) => (
          <Layanan
            key={index}
            gambar={`./image/${item.img}`}
            namaLayanan={item.nama_layanan}
            keterangan={item.keterangan}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
