// CustomizePanel.jsx

import "./CustomizePanel.css";
import { useState } from "react";
const bodyColor = [
  "#8D5B3E",
  "#A46A47",
  "#B77A56",
  "#C58A65",
  "#D9A17C",
  "#E2B894",
  "#F0C9A5",
  "#FFDAB9",
];
const topColorsArray = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "var(--bg-card)F00",
  "#FF00FF",
  "#00FFFF",
  "#000000",
  "var(--bg-card)FFF",
  "#808080",
  "#FFA500",
  "#800080",
  "#008000",
  "#000080",
  "#FFC0CB",
  "#A52A2A",
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
];
const bottomColorsArray = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "var(--bg-card)F00",
  "#FF00FF",
  "#00FFFF",
  "#000000",
  "var(--bg-card)FFF",
  "#808080",
  "#FFA500",
  "#800080",
  "#008000",
  "#000080",
  "#FFC0CB",
  "#A52A2A",
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
];

export default function CustomizePanel({
  changeColorFunction,
  activebtn,
  setActivebBtn,
}) {
  const [topWearcategory, setTopWearCategory] = useState("All");

  const [selectedTopColor, setSelectedTopColor] = useState("#3498db");
  const [selectedBottomColor, setSelectedBottomColor] = useState("#3498db");
  const [selectedBodyColor, setSelectedBodyColor] = useState("#3498db");

  // top wear

  return (
    <div className="customize-panel">
      {/* Heading */}
      <div className="panel-header">
        <div>
          <h2>Customize You</h2>
          <p>Create your perfect look</p>
        </div>

        <button className="close-btn">×</button>
      </div>

      {/* Gender */}
      <div className="gender-toggle">
        <button
          className={`${activebtn === true ? "active" : ""}`}
          onClick={() => setActivebBtn(true)}
        >
          Male
        </button>
        <button
          className={`${activebtn === false ? "active" : ""}`}
          onClick={() => setActivebBtn(false)}
        >
          Female
        </button>
      </div>

      {/* Skin Tone */}
      <div className="section">
        <h3>Skin Tone</h3>

        <div className="skin-tones">
          {bodyColor.map((value, index) => (
            <span
              key={index}
              className={selectedBodyColor === value ? "selected" : ""}
              style={{ background: value }}
              onClick={() => {
                setSelectedBodyColor(value);
                changeColorFunction.setSkinColor(value);
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Hair Style */}
      <div className="section">
        <div className="section-title">
          <h3>Hair Style</h3>
          <button>See All</button>
        </div>

        <div className="hair-grid">
          <div className="hair-card active">
            <img
              src="https://www.kaya.in/media/.renditions/wysiwyg/textured-crop-hairstyle-men-2026.png"
              alt=""
            />
          </div>

          <div className="hair-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f53c1f998bf2728f8ed3646/a180b4cb-54d9-4314-b864-a2bce33df7c1/Disconnected-Undercut.jpg?format=1500w"
              alt=""
            />
          </div>

          <div className="hair-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f53c1f998bf2728f8ed3646/e176021f-e3e1-4bfb-b7a4-37ee2adbaab4/Surfer.jpg?format=1500w"
              alt=""
            />
          </div>

          <div className="hair-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f53c1f998bf2728f8ed3646/73135b1e-533d-4324-9ad2-c8e166cb042e/Mid-Length-Big-Bang.jpg?format=1500w"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Top Wear */}
      <div className="section">
        <h3>Top Wear</h3>

        <div className="category-tabs">
          <button
            onClick={() => setTopWearCategory("All")}
            className={`${topWearcategory === "All" ? "active" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setTopWearCategory("TShirt")}
            className={`${topWearcategory === "TShirt" ? "active" : ""}`}
          >
            T-Shirt
          </button>
          <button
            onClick={() => setTopWearCategory("Shirt")}
            className={`${topWearcategory === "Shirt" ? "active" : ""}`}
          >
            Shirt
          </button>
          <button
            onClick={() => setTopWearCategory("Hoodie")}
            className={`${topWearcategory === "Hoodie" ? "active" : ""}`}
          >
            Hoodie
          </button>
        </div>
      </div>

      {/* Colors */}
      <div className="section">
        <h3>Color</h3>

        <div className="colors">
          {topColorsArray.map((value, index) => (
            <span
              key={index}
              className={selectedTopColor === value ? "selected" : ""}
              style={{ backgroundColor: value }}
              onClick={() => {
                // setSelectedTopColor(value);
                changeColorFunction.setShirtColor(value);
              }}
            ></span>
          ))}

          <span style={{ background: "#ff9ff3" }}></span>
        </div>
      </div>

      {/* Bottom Wear */}
      <div className="section">
        <h3>Bottom Wear</h3>
        <div className="category-tabs">
          <button
            onClick={() => setTopWearCategory("All")}
            className={`${topWearcategory === "All" ? "active" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setTopWearCategory("TShirt")}
            className={`${topWearcategory === "TShirt" ? "active" : ""}`}
          >
            pant
          </button>
          <button
            onClick={() => setTopWearCategory("Shirt")}
            className={`${topWearcategory === "Shirt" ? "active" : ""}`}
          >
            Pagama
          </button>
          <button
            onClick={() => setTopWearCategory("Hoodie")}
            className={`${topWearcategory === "Hoodie" ? "active" : ""}`}
          >
            Jeans
          </button>
        </div>

        <h3 style={{ marginTop: "20px" }}>Color</h3>
        <div className="colors" style={{ marginTop: "20px" }}>
          {bottomColorsArray.map((value, index) => (
            <span
              key={index}
              className={selectedBottomColor === value ? "selected" : ""}
              style={{ backgroundColor: value }}
              onClick={() => {
                // setSelectedPantColor(value)
                changeColorFunction.setPantColor(value);
              }}
            ></span>
          ))}

          <span style={{ background: "#ff9ff3" }}></span>
        </div>
      </div>

      {/* Shoes */}
      <div className="section">
        <h3>Shoes</h3>

        <div className="category-tabs">
          <button
            onClick={() => setTopWearCategory("All")}
            className={`${topWearcategory === "All" ? "active" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setTopWearCategory("TShirt")}
            className={`${topWearcategory === "TShirt" ? "active" : ""}`}
          >
            slipper
          </button>
          <button
            onClick={() => setTopWearCategory("Shirt")}
            className={`${topWearcategory === "Shirt" ? "active" : ""}`}
          >
            formal shoes
          </button>
          <button
            onClick={() => setTopWearCategory("Hoodie")}
            className={`${topWearcategory === "Hoodie" ? "active" : ""}`}
          >
            sports shoes
          </button>
        </div>

        <div className="cloth-grid">
          <div className="cloth-card">
            <img
              src="https://www.shoezone.com/Images/Static/blog/the-7-types-of-shoes-every-man-should-own-11.jpg"
              alt=""
            />
          </div>

          <div className="cloth-card active">
            <img
              src="https://www.shoezone.com/Images/Static/blog/the-7-types-of-shoes-every-man-should-own-14.jpg"
              alt=""
            />
          </div>

          <div className="cloth-card">
            <img
              src="https://cdn.media.amplience.net/i/harryrosen/20164359075?$block-grid-1x4$&maxW=1920&fmt=auto"
              alt=""
            />
          </div>
        </div>

        <h3 style={{ marginTop: "20px" }}>Color</h3>
        <div className="colors" style={{ marginTop: "20px" }}>
          {bottomColorsArray.map((value, index) => (
            <span
              key={index}
              className={selectedBottomColor === value ? "selected" : ""}
              style={{ backgroundColor: value }}
              onClick={() => {
                // setSelectedBottomColor(value)
                changeColorFunction.setBottomColor(value);
              }}
            ></span>
          ))}

          <span style={{ background: "#ff9ff3" }}></span>
        </div>
      </div>

      {/* Buttons */}
      <div className="panel-buttons">
        <button className="random-btn">Random Look</button>

        <button className="reset-btn">Reset</button>
      </div>
    </div>
  );
}
