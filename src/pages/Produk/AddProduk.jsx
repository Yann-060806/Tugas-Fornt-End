import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import addProductt from "../../assets/addProductt.svg";
import axiosInstance from "../../utils/axiosInstance";

const AddProduk = () => {
  const navigate = useNavigate();
  const [namaProduk, setNamaProduk] = useState("");
  const [stok, setStok] = useState(0);
  const [minStok, setMinStok] = useState(0);
  const [harga, setHarga] = useState(0);
  const [kategori, setKategori] = useState("");
  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);

  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/produk`,
        {
          nama_barang: namaProduk,
          stok,
          min_stok: minStok,
          harga,
          jenis_produk_id: kategori,
          gambar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handlechangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  const getCategories = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );
      setKategoriList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="produk-header-tambah">
        <h3>Tambah Produk</h3>
      </div>

      <div className="add-kategori-layout">
        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="nama_produk">Nama Produk</label>
              <input
                type="text"
                id="nama_produk"
                placeholder="Contoh: Indomie Bangladesh"
                onChange={(e) => setNamaProduk(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="stok">Stok</label>
              <input
                type="number"
                id="stok"
                onChange={(e) => setStok(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="min_stok">Minimal Stok</label>
              <input
                type="number"
                id="min_stok"
                onChange={(e) => setMinStok(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="harga">Harga</label>
              <input
                type="number"
                id="harga"
                onChange={(e) => setHarga(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="nama">Nama Kategori</label>
              <select
                id="nama"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                required
              >
                <option value="" hidden>
                  Pilih Kategori
                </option>
                {kategoriList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="from-grid">
              <label htmlFor="gambar">Gambar</label>
              <input
                type="file"
                id="gambar"
                accept="image/*"
                onChange={handlechangeImage}
              />
              {preview && <img src={preview} alt="image-preview" width={220} />}
            </div>

            <div className="btn-group">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn-delete"
              >
                Batal
              </button>
              <button type="submit" className="btn-tambah" disabled={loading}>
                {loading ? "Menyimpan..." : "Simpan"}
              </button>
            </div>
          </form>
        </div>

        <div className="image-side">
          <img src={addProductt} alt="produk" />
        </div>
      </div>
    </div>
  );
};

export default AddProduk;
