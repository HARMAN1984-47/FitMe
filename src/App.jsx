import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Navbar";


import Home from "./Home..jsx";
import SavedOutfits from "./SavedOutfits.jsx";
import AboutMe from "./AboutMe.jsx";
import Profile from "./Profile.jsx";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import Settings from "./Settings.jsx";
import RefrshHandler from "./RefrshHandler.jsx";
import LookBestc from "./LookBestc.jsx";




function App() {
  const [isAuthenticated,setIsAuthenticated] =useState(false)
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element  : <Navigate to="/login"/>
  }
  return (
    <>

    <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Navbar />

      <Routes>
        <Route path="/" element=  {<PrivateRoute element ={<Home/>}/>} />
        {/* upar wali line ka hai{<Navigate to="/home"/>} /> */}
        <Route path="/Home" element={<PrivateRoute element ={<Home/>}/>} />
        <Route path="/SavedOutfits" element={<PrivateRoute element ={<SavedOutfits/>}/>} />
        <Route path="/LookBestc" element={<PrivateRoute element ={<LookBestc/>}/>} />

        <Route path="/AboutMe" element={<PrivateRoute element ={<AboutMe/>}/>} />
        <Route path="/signUp" element={<SignUp />} caseSensitive/>
        <Route path="/login" element={<Login />} caseSensitive />
        <Route path="/settings" element={<Settings />} />




      </Routes>
    </>
  );
}

export default App;