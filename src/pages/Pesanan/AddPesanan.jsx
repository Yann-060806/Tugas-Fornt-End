import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import addPesanan from "../../assets/addPesanan.svg";
import axiosInstance from "../../utils/axiosInstance";

const AddPesanan = () => {
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState("");
  const [total, setTotal] = useState(0);
  const [pelanggan, setPelanggan] = useState("");
  const [preview, setPreview] = useState(null);

  const [pelangganiList, setPelangganList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getListPelanggan();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/pesanan`,
        {
          tanggal,
          total,
          pelanggan_id: pelanggan,
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

  const getListPelanggan = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/pelanggan`,
      );
      setPelangganList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="kategori-header-tambah">
        <h3>Tambah Pesanan</h3>
      </div>

      <div className="add-kategori-layout">
        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                id="tanggal"
                onChange={(e) => setTanggal(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="total">Total</label>
              <input
                type="number"
                id="total"
                onChange={(e) => setTotal(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="nama">Nama Pelanggan</label>
              <select
                id="nama"
                value={pelanggan}
                onChange={(e) => setPelanggan(e.target.value)}
                required
              >
                <option value="" hidden>
                  Pilih Pelanggan
                </option>
                {pelangganiList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
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
          <img src={addPesanan} alt="produk" />
        </div>
      </div>
    </div>
  );
};

export default AddPesanan;
