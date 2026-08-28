// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { handleError, handleSuccess } from "./utils.jsx";
// import {ToastContainer} from 'react-toastify';

// export default function Settings() {
//   const [loggedInUser, setLoggedInUser] = useState("");
//   const [products, setProducts] = useState("");


//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem("loggedInUser"));
//   }, []);

//   const handleLogout = (e) => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loggedInUser");
//     handleSuccess("Logged out successfully!");
//     setTimeout(() => {
//         navigate("/login");
//     }, 1000);
//   };


  
//   return (
//     <>
//       <h1>Settings</h1>
//       <p style={{ fontWeight: "bold", color: "white" }}>
//         Logged in as: {loggedInUser}
//       </p>
//       <button onClick={handleLogout}>Logout</button>
//       {
      
//       }
//       <ToastContainer />
//     </>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "./utils.jsx";
import { ToastContainer } from "react-toastify";

export default function Settings() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "Guest");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Settings</h1>
        <p style={styles.userInfo}>
          Logged in as: <span style={styles.userName}>{loggedInUser}</span>
        </p>
        <button 
          style={styles.logoutBtn} 
          onClick={handleLogout}
          onMouseOver={(e) => e.target.style.backgroundColor = "#7c3aed"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#8b5cf6"}
        >
          Logout
        </button>
      </div>
      {/* ToastContainer theme set to dark to match UI */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}

// Professional Dark Theme Layout Styles
const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "var(--bg-card)", 
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    minWidth: "320px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  },
  heading: {
    color: "#ffffff",
    marginTop: "0",
    marginBottom: "20px",
    fontSize: "28px",
    letterSpacing: "1px"
  },
  userInfo: {
    color: "#a0a0b0",
    fontSize: "16px",
    marginBottom: "35px"
  },
  userName: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  logoutBtn: {
    backgroundColor: "#4f2aa5", // Fits your purple UI theme
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s ease",
  }
};