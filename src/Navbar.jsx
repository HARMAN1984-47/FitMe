// Navbar.jsx
import "./Navbar.css";
// import { Search, Bell, SunMedium } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import React, { useState,useEffect } from "react";
import {handleToggle} from './utils'


export default function Navbar() {

  const [loggedInUser, setLoggedInUser] = useState('');
  const [isOn, setIsOn] = useState(false);


  useEffect(()=>{
   setLoggedInUser(localStorage.getItem('loggedInUser'));
  },[])


  useEffect(() => {
    if (isOn) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute(" data-theme", "light");
      document.documentElement.setAttribute("data-theme", "dark");

    }
    


  }, [isOn]);
  
  return (
    <>
      <nav className="navbar">
        {/* Left */}
        <div className="navbar-left">
          {/* Logo */}
          <div className="logo-section">
            <div className="logo-box">AI</div>
            <div>
              <h1 className="logo-title">
                FitMe <span>AI</span>
              </h1>
              <p className="logo-subtitle">Dress Better. Look Perfect.</p>
            </div>
          </div>

          {/* Links */}
          <div className="nav-links">
            {/* CHANGE: React Router me NavLink ke andar ek function milta hai ({ isActive }) jisse hum active class laga sakte hain.
                Inline style se textDecoration: "none" alag se de diya gaya hai. */}
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/SavedOutfits"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
             saved Outfits
            </NavLink>
            <NavLink
              to="/AboutMe"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {" "}
              About me
            </NavLink>
          
          </div>
        </div>

        {/* Right */}
        <div className="navbar-right">
          {/* Search */}
          <div className="search-box">
            <input type="text" placeholder="Search outfits..." />
          </div>

          {/* Notification */}
          <button className="icon-btn" onClick={() => handleToggle(isOn,setIsOn)}>{isOn?'☀️' : '🌙'}</button>

          <NavLink
            to="/settings"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {/* Profile */}
            <div className="profile-box">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/3/18/1adfb3ee-18a3-4e78-a924-28d351fbd090.jpg"
                alt="profile"
              />
              <div>
                {<h3>{loggedInUser}</h3>}
                <p>Premium User</p>
              </div>
            </div>
          </NavLink>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}
