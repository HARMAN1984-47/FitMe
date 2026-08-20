// AvatarPreview.jsx

import "./AvatarPreview.css";
import Svg from "./Svg.jsx";
import Svg2 from "./Svg2.jsx";

import {
  ZoomIn,
  RotateCcw,
  Image,
  Camera,
  Heart,
  Share2,
} from "lucide-react";



export default function AvatarPreview({ colorFromApp,onSave,knowGirlBoy }) {
  return (
    <div className="avatar-preview">

      {/* Top Buttons */}
      <div className="preview-top">

        <div className="top-left">
          <button>↶</button>
          <button>↷</button>
        <button className="save-btn" onClick={onSave}>Save Look</button>

        </div>

      
      </div>

      {/* Avatar Area */}
      <div className="avatar-container">

     
        {/* Avatar */}
        <div className="avatar-stage">

         { knowGirlBoy?<Svg shirtColorForSvg={colorFromApp}/>:<Svg2 shirtColorForSvg={colorFromApp}  />}

        

        </div>

      </div>

      
     
    </div>
  );
}