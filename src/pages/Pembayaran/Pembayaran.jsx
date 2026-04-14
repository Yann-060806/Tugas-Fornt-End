import { useEffect, useState } from "react";
import "./Pembayaran.css";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Pembayaran = () => {
  const { uuid } = useParams();
  const [produk, setProduk] = useState(null);
  const [pelanggan, setPelanggan] = useState(null);
  const [jumlah, setJumlah] = useState(1);

  const getProduk = async () => {
    try {
      const res = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/produk/${uuid}`,
      );
      setProduk(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getPelanggan = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);

      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/pelanggan`,
      );

      const semuaPelanggan = result.data.data;

      const pelangganLogin = semuaPelanggan.find(
        (p) => p.user_id === decoded.userId,
      );

      // console.log("PEL LOGIN:", pelangganLogin);

      setPelanggan(pelangganLogin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduk();
    getPelanggan();
  }, []);

  const tambah = () => setJumlah(jumlah + 1);
  const kurang = () => jumlah > 1 && setJumlah(jumlah - 1);

  if (!produk) return <p>Loading...</p>;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span className="back">← Kembali</span>
        <h2>Checkout</h2>
      </div>

      <div className="step-container">
        <div className="step active">1</div>
        <div className="line active"></div>
        <div className="step">2</div>
        <div className="line"></div>
        <div className="step">3</div>
      </div>

      <div className="content">
        <div className="card">
          <h3>Detail Produk</h3>

          <div className="product">
            <img src={produk.url} alt="produk" />
            <div className="product-info">
              <p className="kategori">{produk.kategori}</p>
              <h4>{produk.nama_barang}</h4>
              <p className="harga">Rp {produk.harga.toLocaleString()}</p>
              <p className="stok">Stok: {produk.stok}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Informasi Pembelian</h3>

          <label>Pembeli</label>
          <div className="input-box">
            <strong>{pelanggan?.nama}</strong>
            <p>{pelanggan?.no_hp}</p>
          </div>

          <label>Jumlah</label>
          <div className="jumlah">
            <button onClick={kurang}>-</button>

            <input
              type="text"
              value={jumlah}
              min="1"
              onChange={(e) => {
                const value = Number(e.target.value);

                if (value >= 1) {
                  setJumlah(value);
                }
              }}
            />

            <button onClick={tambah}>+</button>
          </div>

          <div className="summary">
            <div>
              <span>Harga satuan</span>
              <span>Rp {produk.harga.toLocaleString()}</span>
            </div>
            <div>
              <span>Jumlah</span>
              <span>{jumlah}</span>
            </div>
            <hr />
            <div className="total">
              <strong>Total</strong>
              <strong>Rp {(produk.harga * jumlah).toLocaleString()}</strong>
            </div>
          </div>

          <button className="btn-bayar">Lanjut ke Pembayaran →</button>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
