import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Dashbaord } from "./dashboard.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API } from "../global";
import { quotes } from "../quotes.js";

export const Color = () => {
  const [mood, setMood] = useState("");
  const [tone, setTone] = useState("");
  const [data, setData] = useState("");
  const [like, setLike] = useState(false);
  const [quote, setquote] = useState("");

  const getColor = () => {
    fetch(`${API}/${mood}/${tone}`)
      .then((response) => response.json())
      .then((data) => {
        const max = data.colors.length;
        const num = Math.floor(Math.random() * max);
        setData(data.colors[num]);
      });
    getQuotes();
  };

  const getQuotes = () => {
    const max = quotes.length;
    const num = Math.floor(Math.random() * max);
    setquote(quotes[num]);
  };

  useEffect(() => {
    getColor();
  }, []);
  console.log(data);
  const handleChange = (event) => {
    setMood(event.target.value);
  };
  const handleChangeColor = (event) => {
    setTone(event.target.value);
  };

  return (
    <div>
      <Dashbaord />
      <div className="color-div">
        <Card id="radio-btn">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              <span>Select Mood</span>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onClick={handleChange}
                value="happy"
                control={<Radio />}
                label="Happy"
              />
              <FormControlLabel
                onClick={handleChange}
                value="sad"
                control={<Radio />}
                label="Sad"
              />
            </RadioGroup>
          </FormControl>
        </Card>
        <Card id="radio-btn">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              <span> Select Color tone</span>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onClick={handleChangeColor}
                value="warm"
                control={<Radio />}
                label="Warm"
              />
              <FormControlLabel
                onClick={handleChangeColor}
                value="cool"
                control={<Radio />}
                label="Cool"
              />
            </RadioGroup>
          </FormControl>
        </Card>
        <div style={{ marginBottom: "10px" }}>
          <Button
            sx={{ borderRadius: "10px" }}
            onClick={getColor}
            variant="contained"
          >
            Get dress color
          </Button>
        </div>

        <div>
          {data ? (
            <div>
              <h3 style={{ textAlign: "center", margin: "2px 2px 10px 2px" }}>
                Today color suggestion
              </h3>
              <Card>
                <div
                  className="daily-color"
                  style={{ backgroundColor: `${data.hex}` }}
                ></div>
                <div className="color-title-div">
                  <p style={{ textAlign: "center" }}>{data.name}</p>
                  <FavoriteIcon
                    onClick={() => setLike(!like)}
                    color={like ? "error" : "grey"}
                  />
                </div>
              </Card>
            </div>
          ) : null}
        </div>
        <br />
        {data ? (
          <Card>
            <CardContent>
              <p style={{ margin: "0px" }}>{quote.text}</p>
              <small style={{ textAlign: "center", margin: "2px" }}>
                - {quote.author}
              </small>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
};
