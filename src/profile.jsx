import React from "react";
import { useEffect, useState } from "react";
import { API } from "../global.js";
import Card from "@mui/material/Card";
import { Dashbaord } from "./dashboard.jsx";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Loading } from "./loading.jsx";
import { Button } from "@mui/material";

export const Profile = () => {
  const [data, setData] = useState("");
  const id = localStorage.getItem("id");

  const [imageSrc, setImageSrc] = useState("");

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="profile-main-container">
      <Dashbaord />
      {data ? (
        <Card id="profile-page-card">
          <div>
            {imageSrc ? (
              <img
                className="profile-image"
                src={imageSrc}
                alt="Selected Image"
              />
            ) : (
              <AccountCircleRoundedIcon sx={{ fontSize: "160px" }} />
            )}
          </div>
          <input id="uploadfile" type="file" onChange={handleImageUpload} />
          <label className="upload-btn" htmlFor="uploadfile">
            upload Picture
          </label>
          <hr style={{ opacity: 0.5, width: "70%" }} />
          <h2>{data.name}</h2>
        </Card>
      ) : (
        <Loading />
      )}
    </div>
  );
};
