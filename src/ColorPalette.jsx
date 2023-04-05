import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Dashbaord } from "./dashboard.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API } from "../global.js";
import { Loading } from "./loading.jsx";

export const ColorPalette = () => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    fetch(`${API}/colors`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setColor(data));
  }, []);
  return (
    <div>
      <Dashbaord />
      {color ? (
        <div className="color-list">
          {color.map((colors) => (
            <Colors key={colors._id} colors={colors} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const Colors = ({ colors }) => {
  const [like, setLike] = useState(false);
  return (
    <Card id="main-color-palette">
      <div
        className="daily-color-palette"
        style={{ backgroundColor: `${colors.hex}` }}
      ></div>
      <div className="color-title-div">
        <p style={{ textAlign: "center" }}>{colors.name}</p>
        <FavoriteIcon
          style={{ cursor: "pointer" }}
          onClick={(e) => setLike(!like)}
          color={like ? "error" : "grey"}
        />
      </div>
    </Card>
  );
};
