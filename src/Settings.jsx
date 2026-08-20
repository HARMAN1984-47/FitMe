import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "./utils.jsx";
import {ToastContainer} from 'react-toastify';

export default function Settings() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully!");
    setTimeout(() => {
        navigate("/login");
    }, 1000);
  };


  const fetchProducts = async () => {
    try{

        const url = "http://localhost:8080/product";
        const headers = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        const response = await fetch(url, headers);
        const result = await response.json();
        console.log(result);
        setProducts(result);

    }catch (error) {
        handleError(error)
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Settings</h1>
      <p style={{ fontWeight: "bold", color: "white" }}>
        Logged in as: {loggedInUser}
      </p>
      <button onClick={handleLogout}>Logout</button>
      {
       products && products.map((product,index) => (
            <ul  key={index}> <span>{product.name}: {product.price}</span> </ul>
        )
    )
      }
      <ToastContainer />
    </>
  );
}
