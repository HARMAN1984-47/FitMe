// AvatarPreview.jsx

import "./AvatarPreview.css";
import Svg from "./Svg.jsx";
import {
  ZoomIn,
  RotateCcw,
  Image,
  Camera,
  Heart,
  Share2,
} from "lucide-react";



export default function AvatarPreview({ colorFromApp }) {
  return (
    <div className="avatar-preview">

      {/* Top Buttons */}
      <div className="preview-top">

        <div className="top-left">
          <button>↶</button>
          <button>↷</button>
        </div>

      
      </div>

      {/* Avatar Area */}
      <div className="avatar-container">

     
        {/* Avatar */}
        <div className="avatar-stage">

          <Svg shirtColorForSvg={colorFromApp}/>

       

        </div>

      </div>

      
     
    </div>
  );
}