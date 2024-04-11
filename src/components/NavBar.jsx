import React from "react";
import "./NavBar.css"
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
          Products
        </Link>
        {token ? (
          <>
          <Link className="nav-link" to ="/cart" >Cart</Link>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          </>
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
