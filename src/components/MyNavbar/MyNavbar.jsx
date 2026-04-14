import "./MyNavbar.css";
import { useState, useEffect } from "react";
import profil from "../../assets/images.png";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const MyNavbar = ({ search, setSearch }) => {
  const [open, setOpen] = useState(false);
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
    <div className="MyNavbar">
      <ul>
        <li>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>

        <div className="navbar-right">
          <div className="avatar-wrapper" onClick={() => setOpen(!open)}>
            <img src={profil} alt="profile" className="avatar" />

            {open && (
              <div className="dropdown-menu">
                <div className="dropdown-item">{username}</div>
                <div className="dropdown-item">Profile</div>
                <div
                  className="dropdown-item logout-item"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MyNavbar;
