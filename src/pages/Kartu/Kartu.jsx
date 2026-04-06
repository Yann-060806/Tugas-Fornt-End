import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useOutletContext } from "react-router-dom";

const Kartu = () => {
  const [kartu, setKartu] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getKartu();
  }, []);

  const getKartu = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/kartu`);
      setKartu(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = kartu.filter((item) =>
    item.nama?.toLowerCase().includes(search.toLowerCase()),
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
      await axios.delete(`${import.meta.env.VITE_API_URL}/produk/${uuid}`);
      getKartu();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Produk</h3>
        <NavLink to={"/dashboard/produk/add"}>Tambah Produk</NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama</th>
              <th>Diskon</th>
              <th>Iuran</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={item.uuid}>
                  <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td>{item.kode}</td>
                  <td>{item.nama}</td>
                  <td>{item.diskon}</td>
                  <td>{item.iuran}</td>

                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(item.uuid)}>
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

export default Kartu;
