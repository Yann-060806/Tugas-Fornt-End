import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import editKartu from "../../assets/editKartu.svg";
import axiosInstance from "../../utils/axiosInstance";

const EditKartu = () => {
  const navigate = useNavigate();
  const [kode, setKode] = useState("");
  const [namaKartu, setNamaKartu] = useState("");
  const [diskon, setDiskon] = useState(0);
  const [iuran, setIuran] = useState(0);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    getProdukByUUID();
  }, []);

  const getProdukByUUID = async () => {
    setLoading(true);
    try {
      const kartu = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/kartu/${uuid}`,
      );
      setKode(kartu.data.data.kode);
      setNamaKartu(kartu.data.data.nama);
      setDiskon(kartu.data.data.diskon);
      setIuran(kartu.data.data.iuran);
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
      await axiosInstance.put(`${import.meta.env.VITE_API_URL}/kartu/${uuid}`, {
        kode,
        nama: namaKartu,
        diskon,
        iuran,
      });
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="pelanggan-header-tambah">
        <h3>Edit Kartu</h3>
      </div>

      <div className="add-kartu-layout">
        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="kode">Kode</label>
              <input
                type="text"
                id="kode"
                value={kode}
                placeholder="Masukan Kode...."
                onChange={(e) => setKode(e.target.value)}
                required
              />
              {errors.kode && <span className="error">{errors.global}</span>}
            </div>

            <div className="from-grid">
              <label htmlFor="nama_kartu">Nama Kartu</label>
              <input
                type="text"
                id="nama_kartu"
                value={namaKartu}
                placeholder="Contoh: Platinum"
                onChange={(e) => setNamaKartu(e.target.value)}
                required
              />
              {errors.nama_kartu && (
                <span className="error">{errors.global}</span>
              )}
            </div>

            <div className="from-grid">
              <label htmlFor="diskon">Diskon</label>
              <input
                type="number"
                id="diskon"
                value={diskon}
                placeholder="Contoh: 0.05%"
                onChange={(e) => setDiskon(e.target.value)}
                required
              />
              {errors.diskon && <span className="error">{errors.global}</span>}
            </div>

            <div className="from-grid">
              <label htmlFor="iuran">Iuran</label>
              <input
                type="number"
                id="iuran"
                value={iuran}
                onChange={(e) => setIuran(e.target.value)}
                required
              />
              {errors.iuran && <span className="error">{errors.global}</span>}
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
          <img src={editKartu} alt="preview" />
        </div>
      </div>
    </div>
  );
};

export default EditKartu;
