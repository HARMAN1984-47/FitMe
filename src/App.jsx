import React, { useState } from "react";
import Navbar from "./Navbar";
import CustomizePanel from "./CustomizePanel";
import AvatarPreview from "./AvatarPreview";
import AIStylist from "./AIStylist";

function App() {

  const [shirtColor, setShirtColor] = useState("#2068F5");
  const [skinColor, setSkinColor] = useState("#FFDAB9");
  const [bottomColor, setBottomColor] = useState("#2068F5");
  const [pantColor, setPantColor] = useState("#2068F5");

  const applyLook = (look) => {

   

    if (look.shirt) {
      setShirtColor(look.shirt);
    }

    if (look.pant) {
      setPantColor(look.pant);
    }

    if (look.shoes) {
      setBottomColor(look.shoes);
    }

  };

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

        <CustomizePanel
          changeColorFunction={{
            setShirtColor,
            setSkinColor,
            setBottomColor,
            setPantColor,
          }}
        />

        <AvatarPreview
          colorFromApp={{
            shirtColor,
            skinColor,
            bottomColor,
            pantColor,
          }}
        />

        <AIStylist applyLook={applyLook} />

      </div>

    </div>
  );
}

export default App;