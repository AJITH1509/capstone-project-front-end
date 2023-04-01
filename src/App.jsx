import { useEffect, useState } from "react";
import { API } from "../global.js";
import { Profile } from "./profile.jsx";
import { Dashbaord } from "./dashboard.jsx";
import { Color } from "./color.jsx";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Profile />
      <Dashbaord /> */}
      <Color />
    </div>
  );
}

export default App;
