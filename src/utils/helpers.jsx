export const addCartItem = (cartItems, productId) => {
  const existingCartItemIndex = cartItems.findIndex(
    (item) => item.productId === productId
  );
  if (existingCartItemIndex !== -1) {
    //make a copy of our exiting cart
    const updatedCart = [...cartItems]; // create brand new array so it wont interfea with main
    // update the quantity
    updatedCart[existingCartItemIndex].quantity += 1; // if it is exits we will update by 1
    return updatedCart;
  } else {
    //if there are no new product. add one with qunanity
    const newItem = { productId, quantity: 1 };

    return [...cartItems, newItem];
  }
};

export const removeCartItem = (cartItems, productId) => {
  //check the item if exist in cart
  const existingCartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.productId === productId
  );
  //if the product is exist and item.quanity is greater than 1 ====> decreament
  if (
    existingCartItemIndex !== -1 &&
    cartItems[existingCartItemIndex].quantiry > 1 //ok
  ) {
    const updatedCart = cartItems.map((item) => {
      if (item.productId === productId) {
        //update and decrease the quantity by 1
        return { ...item, quantity: item.quantity - 1 }; //update quantity then decrease by 1
      } else {
        return item;
      }
    });
    return updatedCart;
  } else if (
    //if the product exit equil 1 remove it
    existingCartItemIndex !== -1 &&
    cartItems[existingCartItemIndex].quantity === 1 //ok
  ) {
    const updateCart = cartItems.filter((item) => {
      return item.productId !== productId;
    });
    return updateCart;
  } else {
    //if there are nothing so return nothing
    return;
  }
};//ok

export const editCartItemQuantity = (cartItems, productId, newQuantity) => {
  //check the item exit in the cart
  const existingCartItemIndex = cartItems.findIndex((item) => {
    return item.productId === productId;
  });
  if (existingCartItemIndex !== -1) {
    //if the product is exits in cart
    //copy to new array cart
    const updateCart = [...cartItems];
    //update the new quantity to the new quantity
    updateCart[existingCartItemIndex].quantity = newQuantity;
    return updateCart;
  } else {
    //if there are nothing in the cart return nothing
    return cartItems;//ok
  }
};
