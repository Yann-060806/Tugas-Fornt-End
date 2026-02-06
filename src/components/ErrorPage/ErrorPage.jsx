import { NavLink, useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigaet = useNavigate();

  return (
    <div>
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h3>Halaman tidak ditemukan</h3>
        <p>
          Oops! Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        <div className="error-actions">
          <NavLink to="/" className="btn-primary">
            Kembali ke Home
          </NavLink>
          <button className="btn-secondary" onClick={() => navigaet(-1)}>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
