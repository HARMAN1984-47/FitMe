import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { handleToggle } from "./utils";

export default function Navbar() {

  const [loggedInUser, setLoggedInUser] = useState("");
  const [isOn, setIsOn] = useState(false);

  // Hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    setLoggedInUser(
      localStorage.getItem("loggedInUser")
    );
  }, []);


  // Theme
  useEffect(() => {

    if (isOn) {
      document.documentElement.setAttribute(
        "data-theme",
        "light"
      );
    } else {
      document.documentElement.setAttribute(
        "data-theme",
        "dark"
      );
    }

  }, [isOn]);


  // Close menu when pressing Escape
  useEffect(() => {

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };

  }, []);


  // Close mobile menu after clicking link
  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <>
      <nav className="navbar">

        {/* =========================
            LEFT SECTION
        ========================= */}

        <div className="navbar-left">

          {/* Logo */}

          <div className="logo-section">

            <div className="logo-box">
              AI
            </div>

            <div>
              <h1 className="logo-title">
                FitMe <span>AI</span>
              </h1>

              <p className="logo-subtitle">
                Dress Better. Look Perfect.
              </p>
            </div>

          </div>


          {/* Desktop Navigation */}

          <div
            className={`nav-links ${
              menuOpen ? "mobile-open" : ""
            }`}
          >

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>


            <NavLink
              to="/LookBestc"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              onClick={closeMenu}
            >
              LookBestc
            </NavLink>


            <NavLink
              to="/SavedOutfits"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              onClick={closeMenu}
            >
              Saved Outfits
            </NavLink>


            <NavLink
              to="/AboutMe"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              onClick={closeMenu}
            >
              About Me
            </NavLink>

          </div>

        </div>


        {/* =========================
            RIGHT SECTION
        ========================= */}

        <div className="navbar-right">

          {/* Theme */}

          <button
            className="icon-btn"
            onClick={() =>
              handleToggle(
                isOn,
                setIsOn
              )
            }
            aria-label="Toggle theme"
          >
            {isOn ? "☀️" : "🌙"}
          </button>


          {/* Profile */}

          <NavLink
            to="/settings"
            className="profile-link"
            onClick={closeMenu}
          >

            <div className="profile-box">

              <img
                src="https://imgcdn.stablediffusionweb.com/2024/3/18/1adfb3ee-18a3-4e78-a924-28d351fbd090.jpg"
                alt="Profile"
              />

              <div className="profile-info">

                <h3>
                  {loggedInUser}
                </h3>

                <p>
                  Premium User
                </p>

              </div>

            </div>

          </NavLink>


          {/* =========================
              HAMBURGER BUTTON
          ========================= */}

          <button
            className={`hamburger ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </nav>


      {/* =========================
          PAGE CONTENT
      ========================= */}

      <main className="page-content">
        <Outlet />
      </main>

    </>
  );
}