import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import addPelanggan from "../../assets/addPelanggan.svg";
import axiosInstance from "../../utils/axiosInstance";

const AddPelanggan = () => {
  const navigate = useNavigate();

  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [gender, setGender] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [kartu, setKartu] = useState(0);
  const [users, setUsers] = useState("");
  const [kartuList, setKartuList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getListKartu();
    getListUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axiosInstance.post(`${import.meta.env.VITE_API_URL}/pelanggan`, {
        nama: namaPelanggan,
        gender,
        no_hp: noHp,
        alamat,
        tgl_lahir: tanggalLahir,
        kartu_id: kartu,
        user_id: users,
      });

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

  const getListUsers = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/users`,
      );
      setUsersList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pelanggan-header-tambah">
        <h3>Tambah Pelanggan</h3>
      </div>

      <div className="add-kategori-layout">
        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="nama_pelanggan">Nama Pelanggan</label>
              <input
                type="text"
                id="nama_pelanggan"
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
                onChange={(e) => setNoHp(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>Alamat</label>
              <input
                type="text"
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>Tanggal Lahir</label>
              <input
                type="date"
                onChange={(e) => setTanggalLahir(e.target.value)}
                required
              />
            </div>

            <div className="from-grid">
              <label>User</label>
              <select
                id="kartu"
                value={users}
                onChange={(e) => setUsers(e.target.value)}
                required
              >
                <option value="" hidden>
                  Pilih Users
                </option>
                {usersList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.username}
                  </option>
                ))}
              </select>
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

        <div className="image-side">
          <img src={addPelanggan} alt="customer" />
        </div>
      </div>
    </div>
  );
};

export default AddPelanggan;
