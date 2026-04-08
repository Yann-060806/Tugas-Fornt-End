import "./MyNavbar.css";
import { useState } from "react";
import profil from "../../assets/images.png";

const MyNavbar = ({ search, setSearch }) => {
  const [open, setOpen] = useState(false);

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
                <div className="dropdown-item">Profile</div>
                <div className="dropdown-item logout-item">Logout</div>
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MyNavbar;
