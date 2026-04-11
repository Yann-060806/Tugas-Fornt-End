import axios from "axios";
import { useEffect, useState } from "react";
import "./LandingPage.css";
import NavbarLandingPage from "../../components/NavbarLandingPage/NavbarLandingPage";
import HeroLandingPage from "../../components/HeroLandingPage/HeroLandingPage";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [kategori, setKategori] = useState([]);
  const [produk, setProduk] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getKategori();
    getProduk();
  }, []);

  const getKategori = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );
      setKategori(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProduk = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/produk`);
      setProduk(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProduk = produk.filter((p) => {
    const matchKategori = selectedKategori
      ? p.jenis_produk_id === selectedKategori
      : true;

    const matchSearch = p.nama_barang
      ?.toLowerCase()
      .includes(search.toLowerCase());

    return matchKategori && matchSearch;
  });

  const categoryName = (jenis_produk_id) => {
    const category = kategori.find((k) => k.id === jenis_produk_id);
    return category ? category.nama : "-";
  };

  return (
    <div className="landing-wrapper">
      <NavbarLandingPage search={search} setSearch={setSearch} />

      <HeroLandingPage />

      <section className="kategori-section">
        <h3>Kategori</h3>

        <div className="kategori-list">
          <button
            className={!selectedKategori ? "active" : ""}
            onClick={() => setSelectedKategori(null)}
          >
            Semua
          </button>

          {kategori.map((item) => (
            <button
              key={item.id}
              className={selectedKategori === item.id ? "active" : ""}
              onClick={() => setSelectedKategori(item.id)}
            >
              {item.nama}
            </button>
          ))}
        </div>
      </section>

      <section className="produk-section">
        <h3>Produk</h3>

        <div className="produk-grid">
          {filteredProduk.length > 0 ? (
            filteredProduk.map((item) => (
              <div className="produk-card" key={item.id}>
                <img src={item.url} />

                <div className="produk-info">
                  <p className="kategori">
                    {categoryName(item.jenis_produk_id)}
                  </p>

                  <h4>{item.nama_barang}</h4>

                  <p className="stok">Stok: {item.stok}</p>

                  <p className="harga">
                    Rp{item.harga.toLocaleString("id-ID")}
                  </p>

                  <div className="produk-btn">
                    <button className="btn-cart">+ Keranjang</button>
                    <button className="btn-beli">Beli</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%" }}>
              Produk tidak ditemukan
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
