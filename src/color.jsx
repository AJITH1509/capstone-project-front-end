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
import { API } from "../global";

export const Color = () => {
  const [mood, setMood] = useState("");
  const [tone, setTone] = useState("");
  const [data, setData] = useState("");

  const getColor = () => {
    fetch(`${API}/${mood}/${tone}`)
      .then((response) => response.json())
      .then((data) => {
        const max = data.colors.length;
        const num = Math.floor(Math.random() * max);
        setData(data.colors[num]);
      });
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
    <div className="color-div">
      <Card id="radio-btn">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Select Mood
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
            Select Color tone
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
      <Button onClick={getColor} variant="contained">
        Get dress color
      </Button>
      {data ? (
        <Card>
          <div
            className="daily-color"
            style={{ backgroundColor: `${data.hex}` }}
          ></div>
          <p>{data.name}</p>
        </Card>
      ) : null}
    </div>
  );
};
