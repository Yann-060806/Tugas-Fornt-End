import Dokter from "../../components/Dokter/Dokter.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "../../App.css";

const StafDokter = () => {
  return (
    <div>
      <Header />
      <h1
        style={{
          textAlign: "center",
          marginTop: "90px",
          fontSize: "3rem",
          color: "#0c77ce",
        }}
      >
        Dokter Berpengalaman Kami
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
        <Dokter
          imgDok={"../../public/image/dokbet.png"}
          nama={"dr Robert Marisa"}
          umur={33}
          spesialis={"Bedah Umum"}
        />
        <Dokter
          imgDok={"../../public/image/dokbet.png"}
          nama={"dr Robert Marisa"}
          umur={33}
          spesialis={"Bedah Umum"}
        />
        <Dokter
          imgDok={"../../public/image/dokbet.png"}
          nama={"dr Robert Marisa"}
          umur={33}
          spesialis={"Bedah Umum"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default StafDokter;
