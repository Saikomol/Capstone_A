import React from "react";
import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({token,setToken}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setCart([]);
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
          <Link className="nav-link" to ="/checkout" >Check Out</Link>
         <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          </>
        ) : (
          <>
          <Link to="/login" className="nav-link">
            Login
          </Link>
                 <p>username: mor_2314 </p>
                 <p>password: 83r5^_</p>
                 </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
