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
        const response = await fetch(`${API_URL}/products`);
        const result = await response.json();
        return result;
    }catch(error){
        console.error("Error /Getting All Product", error)
    }
 }

 export const getSingleProduct = async(id) =>{
    try {
        const response = await fetch(`${API_URL}/product/${id}`);
        const result = await response.json();
        return result;
    }catch (error){
        console.error("There was an error /GET single product", error)
    }
 }