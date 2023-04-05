import React from "react";
import { useEffect, useState } from "react";
import { API } from "../global.js";
import Card from "@mui/material/Card";
import { Dashbaord } from "./dashboard.jsx";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Loading } from "./loading.jsx";

export const Profile = () => {
  const [data, setData] = useState("");
  const id = localStorage.getItem("id");

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Dashbaord />
      {data ? (
        <Card className="profile-page">
          <div style={{ borderRadius: "50%" }}>
            <AccountCircleRoundedIcon sx={{ fontSize: "100px" }} />
          </div>
          <h2>{data.name}</h2>
        </Card>
      ) : (
        <Loading />
      )}
    </div>
  );
};
