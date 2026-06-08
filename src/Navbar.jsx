// Navbar.jsx
import "./Navbar.css";
import { Search, Bell, SunMedium } from "lucide-react";
import React,{useState} from "react";

export default function Navbar() {
  const[navActive,setNavActive]= useState("Home")
 

  return (
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

            <p className="logo-subtitle">
              Dress Better. Look Perfect.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="nav-links">
          <button  onClick={()=>setNavActive("Home")} className={`${navActive === "Home"? "active":""}`}>Home</button>
          <button onClick={()=>setNavActive("Wardrobe")} className={`${navActive === "Wardrobe"? "active":""}`}>Wardrobe</button>
          <button onClick={()=>setNavActive("AIStylist")} className={`${navActive === "AIStylist"? "active":""}`}>AI Stylist</button>
          <button onClick={()=>setNavActive("Outfits")} className={`${navActive === "Outfits"? "active":""}`}>Outfits</button>
          <button onClick={()=>setNavActive("MyLooks")} className={`${navActive === "MyLooks"? "active":""}`}>My Looks</button>
        </div>
      </div>

      {/* Right */}
      <div className="navbar-right">

        {/* Search */}
        <div className="search-box">
          {/* <Search size={18} /> */}
          <input type="text" placeholder="Search outfits..." />
        </div>

        {/* Theme */}
        {/* <button className="theme-toggle">
          <div className="toggle-circle"></div>
          <SunMedium size={14} className="theme-icon" />
        </button> */}

        {/* Notification */}
        <button className="icon-btn">
          {/* <Bell size={18} /> */}
        </button>

        {/* Profile */}
        <div className="profile-box">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/3/18/1adfb3ee-18a3-4e78-a924-28d351fbd090.jpg"
            alt="profile"
          />

          <div>
            <h3>Onrange</h3>
            <p>Premium User</p>
          </div>
        </div>

      </div>
    </nav>
  );
}