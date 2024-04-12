import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import NavBar from "./navBar"
import ProductDetail from "./ProductDetails";
import AllProducts from "./AllProducts";
import { getAllProducts } from "../API";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState(
  JSON.parse(localStorage.getItem("cart"|| []))
);
  const [user,setUser] = useState(
  JSON.parse(localStorage.getItem("user"|| null))
);
  
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
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartArr = JSON.stringify(cart);
      localStorage.setItem("cart",cartArr)
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token]);

  return (
    <div>
      <NavBar token={token} setToken={setToken}></NavBar>
      <Routes>
        <Route path="/" element={<AllProducts products = {products} cart={cart} setCart={setCart}/>}/>
        <Route 
        path="/login" 
        element={<Login setToken={setToken} setUser={setUser} setCart={setCart} />}
        />
        <Route path="/:productId" element={<SingleProduct setCart = {setCart} cart = {cart}/>}/>
        <Route 
        path="/cart" 
        element= {<Cart cart={cart} products={products} setCart={setCart}/>}
        />
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
