import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Stack, Slider, Grid } from "@mui/material";

export default function Player() {
  const [volume, setVolume] = useState<number>(40);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  return (
    <Grid>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <PlayArrowIcon sx={{ fontSize: 40, color: "white" }} />

        <VolumeDown sx={{ color: "white" }} />
        <Slider aria-label="Volume" value={volume} onChange={handleChange} />
        <VolumeUp sx={{ color: "white" }} />
      </Stack>
    </Grid>
  );
}
