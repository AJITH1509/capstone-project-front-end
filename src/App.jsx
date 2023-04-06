import { useEffect, useState } from "react";
import { API } from "../global.js";
import { Profile } from "./profile.jsx";
import { Color } from "./color.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ColorPalette } from "./ColorPalette.jsx";
import { LoginPage } from "./LoginPage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { SignUpPage } from "./SignUpPage";
import { ForgetPass } from "./Forget";
import { VerifyOtp } from "./VerifyOtp";
import { NewPassword } from "./newPassword";
import { EmailVerification } from "./EmailVerification";
import { NotFound } from "./NotFound.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/daily-color" element={<Color />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login/forgetpassword" element={<ForgetPass />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/mailverification" element={<EmailVerification />} />
        <Route path="/setpassword" element={<NewPassword />} />
        <Route path="/More-colors" element={<ColorPalette />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
