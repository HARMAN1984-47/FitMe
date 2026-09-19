import React, { useState } from "react";
import CustomizePanel from "./CustomizePanel";
import AvatarPreview from "./AvatarPreview";
import AIStylist from "./AIStylist";
import "./Home.css";

function Home() {
  const [shirtColor, setShirtColor] = useState("#2068F5");
  const [skinColor, setSkinColor] = useState("#FFDAB9");
  const [bottomColor, setBottomColor] = useState("#2068F5");
  const [pantColor, setPantColor] = useState("#2068F5");
  const [activebtn, setActivebBtn] = useState(true);

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

  const handleSaveToDatabase = async () => {
    const outfitData = {
      shirt: shirtColor,
      pant: pantColor,
      skin: skinColor,
      bottom: bottomColor,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:8080/outfits",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(outfitData),
        }
      );

      if (response.ok) {
        alert("Saved!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="home-layout">

      <section className="home-customize">
        <CustomizePanel
          changeColorFunction={{
            setShirtColor,
            setSkinColor,
            setBottomColor,
            setPantColor,
          }}
          activebtn={activebtn}
          setActivebBtn={setActivebBtn}
        />
      </section>

      <section className="home-avatar">
        <AvatarPreview
          colorFromApp={{
            shirtColor,
            skinColor,
            bottomColor,
            pantColor,
          }}
          onSave={handleSaveToDatabase}
          knowGirlBoy={activebtn}
        />
      </section>

      <section className="home-ai">
        <AIStylist applyLook={applyLook} />
      </section>

    </main>
  );
}

export default Home;