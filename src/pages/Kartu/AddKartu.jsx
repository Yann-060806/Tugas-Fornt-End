import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import addKartu from "../../assets/addKartu.svg";
import axiosInstance from "../../utils/axiosInstance";

const AddKartu = () => {
  const navigate = useNavigate();
  const [kode, setKode] = useState("");
  const [namaKartu, setNamaKartu] = useState("");
  const [diskon, setDiskon] = useState(0);
  const [iuran, setIuran] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axiosInstance.post(`${import.meta.env.VITE_API_URL}/kartu`, {
        kode,
        nama: namaKartu,
        diskon,
        iuran,
      });
      navigate(-1);
    } catch (error) {
      console.log(error.response);
      const apiErrors = error.response.data.errors || [];
      if (apiErrors.length > 0) {
        const errorPerField = {};
        apiErrors.forEach((e) => {
          errorPerField[e.path] = e.msg;
        });
        setErrors(errorPerField);
      } else {
        setErrors({
          global: error.response.data.msg || "Gagal Menyimpan",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="kartu-header-tambah">
        <h3>Tambah Kartu</h3>
      </div>

      <div className="add-kartu-layout">
        <div className="image-side">
          <img src={addKartu} alt="kategori" />
        </div>

        <div className="form-side">
          <form onSubmit={handleSubmit} className="from-wrapper">
            <div className="from-grid">
              <label htmlFor="kode">Kode</label>
              <input
                type="text"
                id="kode"
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
      </div>
    </div>
  );
};

export default AddKartu;
