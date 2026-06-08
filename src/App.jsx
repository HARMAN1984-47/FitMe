// App.jsx
import React,{useState} from "react";
import Navbar from "./Navbar";
import CustomizePanel from "./CustomizePanel";
import AvatarPreview from "./AvatarPreview";
import AIStylist from "./AIStylist";
import Svg from "./Svg";

import "./App.css";

function App() {
  const[shirtColor,setShirtColor]= useState("#2068F5");
  const[skinColor,setSkinColor] = useState("#FFDAB9")
  const[bottomColor,setBottomColor] = useState("#2068F5")
  const[pantColor,setPantColor] = useState("#2068F5")

  return (
    <div>

      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <CustomizePanel changeColorFunction={{setShirtColor,setSkinColor,setBottomColor,setPantColor}}/>

        <AvatarPreview colorFromApp={{shirtColor,skinColor,bottomColor,pantColor}}/>

        <AIStylist />
      </div>

    </div>
  );
}

export default App;