import React,{useState,useEffect} from "react";
import { getSingleProduct } from "../API";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();//this will give ID

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProduct(productId);
      setProduct(product)
    };
    fetchSingleProduct();
  }, [productId]);//when the product id is working then the function will work

  if(!product){
    return <h1>Loading.....</h1>
  }

  return  <ProductDetails product={product} isSingle />
  
};

export default SingleProduct;
