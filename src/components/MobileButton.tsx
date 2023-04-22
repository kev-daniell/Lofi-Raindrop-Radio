import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function MobileButton({
  player,
  play,
  setPlay,
}: {
  player: React.RefObject<HTMLAudioElement>;
  play: boolean;
  setPlay: Function;
}) {
  const changePlay = () => {
    if (play && player.current) {
      player.current.pause();
    } else if (player.current) {
      player.current.play();
    }
    setPlay((prev: boolean) => !prev);
  };

  return (
    <>
      {!play ? (
        <div onClick={changePlay}>
          <PlayArrowIcon
            sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
          />
        </div>
      ) : (
        <div onClick={changePlay}>
          <PauseIcon sx={{ fontSize: 40, color: "white", cursor: "pointer" }} />
        </div>
      )}
    </>
  );
}
