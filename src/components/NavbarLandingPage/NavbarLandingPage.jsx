import React from "react";
import logo from "../../assets/images.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./NavbarLandingPage.css";

const NavbarLandingPage = ({ search, setSearch }) => {
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
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default NavbarLandingPage;
