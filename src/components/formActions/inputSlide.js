import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
// import VolumeUp from "@mui/icons-material/VolumeUp";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({ rangeSlide, setRangeSlide }) {
  const handleSliderChange = (event, newValue) => {
    setRangeSlide(newValue);
  };

  const handleInputChange = (event) => {
    setRangeSlide(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (rangeSlide < 0) {
      setRangeSlide(0);
    } else if (rangeSlide > 100) {
      setRangeSlide(100);
    }
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof rangeSlide === "number" ? rangeSlide : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
            marks
            step={10}
            min={0}
            max={100}
            slotProps={{
              rail: {
                className: "bg-violet-300 py-[3px]",
              },
              mark: {
                className: "bg-violet-400 w-[3px]",
              },
              track: {
                className: "bg-violet-400 border-violet-400 py-[2px]",
              },
              thumb: {
                className: "bg-violet-400 ",
              },
              valueLabel : {
                className :'bg-violet-200 border-1 text-sm rounded-full text-violet-800 font-bold'
              }
            }}
          />
        </Grid>
        <Grid item>
          <Input
            value={rangeSlide}
            slotProps={{
              input: {
                className: "text-violet-600 font-bold ",
              },
              root: {
                className:
                  "border-violet-400 before:border-violet-400 after:border-violet-600",
              },
            }}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
