import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          username,
          password,
        },
      );
      const token = response.data.token;
      const decoded = jwtDecode(token);

      //   console.log(response);
      localStorage.setItem("token", token);
      if (decoded.role === "pelanggan") {
        navigate("/landingpage", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.role === "pelanggan") {
        navigate("/landingpage", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <NavLink>
            <div className="login-logo-icon"></div>
          </NavLink>
          <h2>PeTIK Niaga</h2>
          <p>Login</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Masukan Username...."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            autoFocus
          />
        </div>

        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Masukan Password...."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="btn-login" type="submit">
          Masuk
        </button>
      </form>
    </div>
  );
};

export default Login;
