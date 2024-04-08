const BASE_URL = "https://fakestoreapi.com";
export const login = async (username, password) => {
    try {
        const response = await fetch (`${BASE_URL}/auth/login`,{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        const result =  await response.json();
        return result.token;
    }catch(error){
        console.error("Error/Login User", error)
    }
}
 export const getAllProducts = async() => {
    try{
        const response = await fetch(`${BASE_URL}/products`);
        const result = await response.json();
        console.log("result",result);
        return result;
    }catch(error){
        console.error("Error /Getting All Product", error)
    }
 }

 export const getSingleProduct = async(id) =>{
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const result = await response.json();
        return result;
    }catch (error){
        console.error("There was an error /GET single product", error)
    }
 }

 export const getAllUsers= async(username) => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const result = await response.json();
      console.log(result);
      const userData = result.find((user)=> user.username === username)
      return userData; // You can return the data if you want to use it outside the function
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // You can re-throw the error if you want to handle it elsewhere
    }
  }

  export const getUserCart = async(id) => {
    try {
        const response = await fetch(`${BASE_URL}/carts/${id}`);
        const result = await response.json();
        console.log(result);
        return result.products;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  