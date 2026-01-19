import "./Headre.css";

const Header = ({ HMC }) => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <h1>{HMC}</h1>
      </div>
      <ul>
        <li>
          <a href="#h">Home</a>
        </li>
        <li>
          <a href="#a">About</a>
        </li>
        <li>
          <a href="#l">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
