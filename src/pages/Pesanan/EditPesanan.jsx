import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import editPesanan from "../../assets/editPesanan.svg";

const EditPesanan = () => {
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState("");
  const [total, setTotal] = useState(0);
  const [pelanggan, setPelanggan] = useState("");
  const [preview, setPreview] = useState(null);

  const [pelangganiList, setPelangganList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    getProdukByUUID();
    getListPelanggan();
  }, []);

  const getProdukByUUID = async () => {
    setLoading(true);
    try {
      const pesanan = await axios.get(
        `${import.meta.env.VITE_API_URL}/pesanan/${uuid}`,
      );
      setTanggal(pesanan.data.data.tanggal);
      setTotal(pesanan.data.data.total);
      setPelanggan(pesanan.data.data.pelanggan_id);
      setPreview(pesanan.data.data.url);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/pesanan/${uuid}`, {
        tanggal,
        total,
        pelanggan_id: pelanggan,
      });
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const getListPelanggan = async () => {
    try {
      const result = await axios.get(
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
        <h3>Edit Pesanan</h3>
      </div>

      <div className="add-pesanan-layout">
        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                id="tanggal"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label htmlFor="total">Total</label>
              <input
                type="number"
                id="total"
                value={total}
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
          <img src={editPesanan} alt="preview" />
        </div>
      </div>
    </div>
  );
};

export default EditPesanan;
