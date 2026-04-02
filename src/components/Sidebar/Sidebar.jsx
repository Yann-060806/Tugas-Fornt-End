import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/images.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
        <h3>PeTIK Niaga</h3>
      </div>
      <ul>
        <li>
          <NavLink to={"/dashboard"} end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/pesanan"}>Pesanan</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/produk"}>Produk</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/kategori"}>Kategori</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/pelanggan"}>Pelanggan</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/kartu"}>Kartu</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/users"}>User</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/history"}>History</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
