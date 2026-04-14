import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import editPelanggan from "../../assets/editPelanggan.svg";
import axiosInstance from "../../utils/axiosInstance";

const EditPelanggan = () => {
  const navigate = useNavigate();
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [gender, setGender] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [kartu, setKartu] = useState(0);
  const [kartuList, setKartuList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    getProdukByUUID();
    getListKartu();
  }, []);

  const getProdukByUUID = async () => {
    setLoading(true);
    try {
      const pelanggan = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`,
      );
      setNamaPelanggan(pelanggan.data.data.nama);
      setGender(pelanggan.data.data.gender);
      setNoHp(pelanggan.data.data.no_hp);
      setAlamat(pelanggan.data.data.alamat);
      setTanggalLahir(pelanggan.data.data.tgl_lahir);
      setKartu(pelanggan.data.data.kartu_id);
      setPreview(pelanggan.data.data.url);
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
      await axiosInstance.put(
        `${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`,
        {
          nama: namaPelanggan,
          gender,
          no_hp: noHp,
          alamat,
          tgl_lahir: tanggalLahir,
          kartu_id: kartu,
        },
      );
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const getListKartu = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/kartu`,
      );
      setKartuList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pelanggan-header-tambah">
        <h3>Edit Pelanggan</h3>
      </div>

      <div className="add-pelanggan-layout">
        <div className="image-side">
          <img src={editPelanggan} alt="preview" />
        </div>

        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="nama_pelanggan">Nama Pelanggan</label>
              <input
                type="text"
                id="nama_pelanggan"
                value={namaPelanggan}
                placeholder="Contoh: Ari Faqod"
                onChange={(e) => setNamaPelanggan(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>Jenis Kelamin</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="L"
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  L
                </label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="P"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  P
                </label>
              </div>
            </div>

            <div className="from-grid">
              <label>Nomor HP</label>
              <input
                type="tel"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>Tanggal Lahir</label>
              <input
                type="date"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>Kartu</label>
              <select
                id="kartu"
                value={kartu}
                onChange={(e) => setKartu(e.target.value)}
                required
              >
                <option value="" hidden>
                  Pilih Kartu
                </option>
                {kartuList.map((item) => (
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
      </div>
    </div>
  );
};

export default EditPelanggan;
