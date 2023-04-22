import React, { useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import {
  VolumeDown,
  VolumeUp,
  VolumeOff,
  VolumeMute,
} from "@mui/icons-material";
import { Stack, Slider, Grid, Box, Typography } from "@mui/material";

export default function Player({
  play,
  setPlay,
  volume,
  setVolume,
  rainPlayer,
  lofiPlayer,
  setRainPlay,
  setLofiPlay,
}: {
  play: boolean;
  setPlay: Function;
  volume: number;
  setVolume: Function;
  rainPlayer: React.RefObject<HTMLAudioElement>;
  lofiPlayer: React.RefObject<HTMLAudioElement>;
  setRainPlay: Function;
  setLofiPlay: Function;
}) {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const changePlay = () => {
    setLofiPlay(!play);
    setRainPlay(!play);

    if (play && lofiPlayer.current) {
      lofiPlayer.current.pause();
    } else if (lofiPlayer.current) {
      lofiPlayer.current.play();
    }
    if (play && rainPlayer.current) {
      rainPlayer.current.pause();
    } else if (rainPlayer.current) {
      rainPlayer.current.play();
    }
    setPlay((prev: boolean) => !prev);
  };
  return (
    <Grid>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {!play ? (
          <div onClick={changePlay}>
            <PlayArrowIcon
              sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
            />
          </div>
        ) : (
          <div onClick={changePlay}>
            <PauseIcon
              sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
            />
          </div>
        )}
        <Box display={{ sm: "none" }}>
          <Typography
            align="center"
            color={"white"}
            sx={{
              fontFamily: "monospace",
              fontSize: "1rem",
            }}
          >
            Master Mixer
          </Typography>
        </Box>
        <Grid sx={{ width: "100%" }} display={{ xs: "none", sm: "inherit" }}>
          {volume === 0 && <VolumeOff sx={{ color: "white" }} />}
          {volume <= 33 && volume > 0 && <VolumeMute sx={{ color: "white" }} />}
          {volume > 33 && volume <= 66 && (
            <VolumeDown sx={{ color: "white" }} />
          )}
          {volume > 66 && <VolumeUp sx={{ color: "white" }} />}
          <Slider
            aria-label="Volume"
            min={0}
            max={100}
            value={volume}
            onChange={handleChange}
          />
        </Grid>
      </Stack>
    </Grid>
  );
}
