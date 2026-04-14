import { useEffect, useState } from "react";
import logo from "../../assets/images.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./NavbarLandingPage.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const NavbarLandingPage = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getUserLogin = () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      // console.log(decoded);
      setUsername(decoded.username);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUserLogin();
  });

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
        <h2>PeTIK Niaga</h2>

        <div className="nav-menu">
          <span>Beranda</span>
          <span>Produk</span>
          <span>Tentang</span>
          <span>Kontak</span>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="nav-right">
        <FaShoppingCart className="cart-icon" />
        <p>{username}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarLandingPage;
