import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import "./Produk.css";
import { FaPlusCircle } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";

const Produk = () => {
  const [produk, setProduk] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
    getProductCategories();
  }, []);

  const getProduct = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/produk`,
      );
      setProduk(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = produk.filter((item) =>
    item.nama_barang?.toLowerCase().includes(search.toLowerCase()),
  );

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);

  const paginatedData = filterData.slice(
    (currentpage - 1) * ITEMS_PER_PAGE,
    currentpage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleDelete = async (uuid) => {
    const msg = window.confirm("Apakah yakin ingin menghapus produk ini?");
    if (!msg) return;

    try {
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/produk/${uuid}`,
      );
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const getProductCategories = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );
      setCategories(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryName = (jenis_produk_id) => {
    const category = categories.find(
      (product) => product.id === jenis_produk_id,
    );
    return category ? category.nama : "-";
  };

  const handleEdit = async (uuid) => {
    navigate(`/dashboard/produk/edit/${uuid}`);
  };

  return (
    <div>
      <div className="produk-header">
        <h3>Daftar Produk</h3>
        <NavLink to={"/dashboard/produk/add"}>
          <FaPlusCircle /> Tambah Produk
        </NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Stok</th>
              <th>Minimal Stok</th>
              <th>Harga</th>
              <th>Kategori</th>
              <th>Gambar</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((product, index) => (
                <tr key={product.uuid}>
                  <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td>{product.nama_barang}</td>
                  <td>{product.stok}</td>
                  <td>{product.min_stok}</td>
                  <td>Rp{product.harga.toLocaleString("id-ID")}</td>
                  <td>{categoryName(product.jenis_produk_id)}</td>
                  <td>
                    <img src={product.url} alt="gambar" width={100} />
                  </td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(product.uuid)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(product.uuid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>Data tidak ditemukan</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="btn-page"
            disabled={currentpage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &laquo; Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className="btn-page"
              disabled={currentpage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn-page"
            disabled={currentpage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Produk;
