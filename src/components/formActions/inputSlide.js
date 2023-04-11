import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
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
            sx={{
              color: "#a78bfa",
              "& .MuiSlider-valueLabel": {
                color: "#4c1d95",
                background: "#ddd6fe",
                fontWeight: "700",
                borderRadius: "24px",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Input
            value={rangeSlide}
            sx={{
              color: "#7c3aed",
              fontWeight: "bold",
              "& .MuiGrid-root::after": {
                content: '""',
                borderBottom: "2px solid #a78bfa ",
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
