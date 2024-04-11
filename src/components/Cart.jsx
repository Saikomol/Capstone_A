import React from "react";
import "./Cart.css"
import CartItemCard from "./CartItemCard";

const Cart = ({cart,products,setCart}) => {
    console.log("cart ",cart, "products", products);
    const getAllItemDetails = (cartItem) =>
   products.find((product) => product.id === cartItem.productId);
    
    return( <div>
        <h1>Shopping Cart</h1>
        <p>Total Item: </p>
        {cart.map((item) => {
            const productItem = getAllItemDetails(item);
            {console.log("productItem", productItem);}
            return <CartItemCard key={productItem.id} cartItem={productItem}/>
            
        })}
        </div>
    )
}
export default Cart  