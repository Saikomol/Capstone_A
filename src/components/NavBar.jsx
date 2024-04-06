import React from "react";
//import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({token,setToken}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };
  return (
    <nav className="navbar-container">
      <div>
        <h1>Capstone</h1>
      </div>
      <div className="link">
        <Link className="nav-link" to="/">
          Produts
        </Link>
        {token ? (
          <botton className="logOut-button" onClick={handleLogout}>
            Logout
          </botton>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
