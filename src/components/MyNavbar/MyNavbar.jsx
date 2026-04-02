import "./MyNavbar.css";

const MyNavbar = ({ search, setSearch }) => {
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
          <li className="profil">Profile</li>
          <li className="logout">Logout</li>
        </div>
      </ul>
    </div>
  );
};

export default MyNavbar;
