import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product, isSingle, cart, setCart }) => {
  console.log("isSingle", isSingle);
  const navigate = useNavigate();
  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };
  const handleAddToCart = () => {
    const productId = product.id;
    const existingCartItemIndex = cart.findIndex((item) => item.productId === productId)
    if(existingCartItemIndex !== -1){
        const updatedCart = [...cart];
        updatedCart[existingCartItemIndex].quantity += 1;
        setCart(updatedCart);
    }else{
        const newItem = {productId,quantity : 1 }
        setCart((prevCart) => [...prevCart, newItem]);
    }   
    }
  
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        {isSingle && <p className="card-description">{product.description}</p>}
        <p className="card-price">$ {product.price}</p>
        <button className="card-button">Add to Cart</button>
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
