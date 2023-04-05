import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Dashbaord } from "./dashboard.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API } from "../global.js";
import { Loading } from "./loading.jsx";

export const ColorPalette = () => {
  const [color, setColor] = useState(null);

  const addLike = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    });
  };

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
            <Colors key={colors._id} colors={colors} addLike={addLike} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const Colors = ({ colors, addLike }) => {
  const [like, setLike] = useState(false);

  return (
    <Card id="main-color-palette">
      <div
        className="daily-color-palette"
        style={{ backgroundColor: `${colors.hex}` }}
      ></div>
      <div className="color-title-div">
        <p style={{ textAlign: "center" }}>{colors.name}</p>
        <span>
          <FavoriteIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              addLike(colors._id);
              setLike(!like);
            }}
            color={like ? "error" : "grey"}
          />
          ({colors.count})
        </span>
      </div>
    </Card>
  );
};
