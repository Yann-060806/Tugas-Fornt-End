import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const About = () => {
  return (
    <div>
      <Header />
      <section className="profile">
        <h2>Tentang Hanz Medical Center</h2>
        <p>
          Hanz Medical Center merupakan pusat layanan kesehatan terpadu yang
          berkomitmen memberikan pelayanan medis profesional, aman, dan
          berorientasi pada kenyamanan pasien. Dengan didukung tenaga medis
          berpengalaman serta teknologi modern, kami hadir sebagai solusi
          kesehatan terpercaya bagi masyarakat.
        </p>
        <div className="visiMisi">
          <h2>Visi</h2>
          <p>
            Menjadi pusat layanan kesehatan terpercaya yang unggul dalam
            kualitas pelayanan, inovasi medis, dan kepedulian terhadap kesehatan
            masyarakat.
          </p>
          <h2>Misi</h2>
          <p>
            1. Memberikan pelayanan medis yang profesional, aman, dan
            berorientasi pada kenyamanan pasien. <br />
            2. Meningkatkan kualitas sumber daya manusia melalui pelatihan dan
            pengembangan kompetensi secara berkelanjutan. <br />
            3. Mengadopsi teknologi medis terkini untuk mendukung diagnosis dan
            pengobatan yang efektif. <br />
            4. Membangun kemitraan dengan komunitas dan institusi kesehatan
            lainnya guna meningkatkan akses layanan kesehatan. <br />
            5. Mendorong budaya hidup sehat di masyarakat melalui edukasi dan
            program pencegahan penyakit.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
