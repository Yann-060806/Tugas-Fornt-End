import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useOutletContext } from "react-router-dom";

const History = () => {
  const [history, setHistory] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/history`);
      setHistory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = history.filter((item) =>
    item.user?.username?.toLowerCase().includes(search.toLowerCase()),
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
    const msg = window.confirm("Apakah yakin ingin menghapus history ini?");
    if (!msg) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/history/${uuid}`);
      getHistory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar History</h3>
        <NavLink to={"/dashboard/history/add"}>Tambah History</NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Table</th>
              <th>Value</th>
              <th>Username</th>
              <th>Email</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={item.uuid}>
                  <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td>{item.action}</td>
                  <td>{item.table}</td>
                  <td>{item.value}</td>
                  <td>{item.user?.username}</td>
                  <td>{item.user?.email}</td>

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

export default History;
