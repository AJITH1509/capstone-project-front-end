import { useEffect, useState } from "react";
import { API } from "../global.js";
import { Profile } from "./profile.jsx";

import { Color } from "./color.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ColorPalette } from "./ColorPalette.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Color />} />
        <Route path="/More-colors" element={<ColorPalette />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
