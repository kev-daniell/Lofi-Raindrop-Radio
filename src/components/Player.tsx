import React, { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import {
  VolumeDown,
  VolumeUp,
  VolumeOff,
  VolumeMute,
} from "@mui/icons-material";
import { Stack, Slider, Grid } from "@mui/material";

export default function Player({ musicSrc }: { musicSrc: string }) {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(40);
  const [play, setPlay] = useState<boolean>(true);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const changePlay = () => {
    if (play && audioPlayer.current) {
      audioPlayer.current.pause();
    } else if (audioPlayer.current) {
      audioPlayer.current.play();
    }
    setPlay((prev) => !prev);
  };

  useEffect(() => {
    if (audioPlayer && audioPlayer.current) {
      audioPlayer.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <Grid>
      <audio src={musicSrc} ref={audioPlayer} autoPlay loop>
        Browser does not support audio
      </audio>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {!play ? (
          <div onClick={changePlay}>
            <PlayArrowIcon sx={{ fontSize: 40, color: "white" }} />
          </div>
        ) : (
          <div onClick={changePlay}>
            <PauseIcon sx={{ fontSize: 40, color: "white" }} />
          </div>
        )}

        {volume === 0 && <VolumeOff sx={{ color: "white" }} />}
        {volume <= 33 && volume > 0 && <VolumeMute sx={{ color: "white" }} />}
        {volume > 33 && volume <= 66 && <VolumeDown sx={{ color: "white" }} />}
        {volume > 66 && <VolumeUp sx={{ color: "white" }} />}
        <Slider
          aria-label="Volume"
          min={0}
          max={100}
          value={volume}
          onChange={handleChange}
        />
      </Stack>
    </Grid>
  );
}
