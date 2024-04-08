import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import NavBar from "./navBar"
import ProductDetail from "./ProductDetails";
import AllProducts from "./AllProducts";
import { getAllProducts } from "../API";
import SingleProduct from "./SingleProduct";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  const [user,setUser] = useState(null);
  
  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchAllProducts();
  }, []);
  
  
  useEffect(() => {// thi si for store the token and remove
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div>
      <NavBar token={token} setToken={setToken}></NavBar>
      <Routes>
        <Route path="/" element={<AllProducts products = {products}/>}/>
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} setCart={setCart} />}/>
        <Route path="/:productId" element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
};

export default App;
