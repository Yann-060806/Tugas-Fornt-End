import "./Headre.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <h1>HMC</h1>
      </div>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/layanan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Layanan
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dokter"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dokter
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/news"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Berita Kesehatan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
