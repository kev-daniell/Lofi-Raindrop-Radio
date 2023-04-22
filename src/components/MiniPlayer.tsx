import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Typography, Slider, Stack } from "@mui/material";
import React, { useEffect } from "react";

export default function MiniPlayer({
  title,
  player,
  play,
  setPlay,
  volume,
  setVolume,
  masterVolume,
}: {
  title: string;
  player: React.RefObject<HTMLAudioElement>;
  play: boolean;
  setPlay: Function;
  volume: number;
  setVolume: Function;
  masterVolume: number;
}) {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const changePlay = () => {
    if (play && player.current) {
      player.current.pause();
    } else if (player.current) {
      player.current.play();
    }
    setPlay((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (player && player.current) {
      player.current.volume = (volume / 100) * (masterVolume / 100);
    }
  }, [player, volume, masterVolume]);

  return (
    <>
      <Typography
        align="center"
        color={"white"}
        sx={{
          fontFamily: "monospace",
          fontSize: "1rem",
        }}
      >
        {title}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        {!play ? (
          <div onClick={changePlay}>
            <PlayArrowIcon
              sx={{ fontSize: 25, color: "white", cursor: "pointer" }}
            />
          </div>
        ) : (
          <div onClick={changePlay}>
            <PauseIcon
              sx={{ fontSize: 25, color: "white", cursor: "pointer" }}
            />
          </div>
        )}
        <Slider
          size="small"
          aria-label="Volume"
          min={0}
          max={100}
          value={volume}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
