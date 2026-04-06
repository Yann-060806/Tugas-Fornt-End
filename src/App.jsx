import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Kategori from "./pages/Kategori/Kategori";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
import AddKategori from "./pages/Kategori/AddKategori";
import Produk from "./pages/Produk/Produk";
import Kartu from "./pages/Kartu/Kartu";
import Pelanggan from "./pages/Pelanggan/Pelanggan";
import Pesanan from "./pages/Pesanan/Pesanan";
import Users from "./pages/Users/Users";
import History from "./pages/History/History";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<h1>Dashboard</h1>} />

          {/* Pesanan */}
          <Route path="/dashboard/pesanan" element={<Pesanan />} />

          {/* Produk */}
          <Route path="/dashboard/produk" element={<Produk />} />
          <Route
            path="/dashboard/produk/add"
            element={<h1>Tambah Produk</h1>}
          />
          <Route path="/dashboard/produk/edit" element={<h1>Edit Produk</h1>} />

          {/* Jenis Produk */}
          <Route path="/dashboard/kategori" element={<Kategori />} />
          <Route path="/dashboard/kategori/add" element={<AddKategori />} />

          {/* Pelanggan */}
          <Route path="/dashboard/pelanggan" element={<Pelanggan />} />

          {/* Kartu */}
          <Route path="/dashboard/kartu" element={<Kartu />} />

          {/* Users */}
          <Route path="/dashboard/users" element={<Users />} />

          {/* History */}
          <Route path="/dashboard/history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
