import {
  Box,
  Fade,
  Grid,
  IconButton,
  Paper,
  Popper,
  PopperPlacementType,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Player from "./Player";
import { useEffect, useRef, useState } from "react";
import { Settings } from "@mui/icons-material";
import MiniPlayer from "./MiniPlayer";
import storage from "@/firebase/config";
import { getDownloadURL, ref } from "firebase/storage";

export default function Console({ cb }: { cb: Function }) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const rainPlayer = useRef<HTMLAudioElement>(null);
  const lofiPlayer = useRef<HTMLAudioElement>(null);
  const [lofiUrl, setLofiUrl] = useState<string>("");
  const [rainUrl, setRainUrl] = useState<string>("");
  const [lofiVolume, setLofiVolume] = useState<number>(40);
  const [lofiPlay, setLofiPlay] = useState<boolean>(false);
  const [rainVolume, setRainVolume] = useState<number>(40);
  const [rainPlay, setRainPlay] = useState<boolean>(false);
  const [masterPlay, setMasterPlay] = useState<boolean>(false);
  const [masterVolume, setMasterVolume] = useState<number>(40);

  if (lofiUrl.length == 0 || rainUrl.length == 0) {
    getDownloadURL(ref(storage, "lofi.mp3")).then((url) => {
      setLofiUrl(url);
    });
    getDownloadURL(ref(storage, "rain.mp3")).then((url) => {
      setRainUrl(url);
    });
  }

  useEffect(() => {
    if (lofiPlay == rainPlay) {
      setMasterPlay(lofiPlay);
    }
    if (lofiPlay != rainPlay) {
      setMasterPlay(true);
    }
  }, [lofiPlay, rainPlay]);

  const handleOpen =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      container
      spacing={4}
      sx={{
        position: "absolute",
        bottom: matches ? 90 : 130,
        width: "70%",
        left: matches ? 150 : 0,
        right: matches ? 0 : 30,
        margin: "auto",
      }}
    >
      <audio src={lofiUrl} ref={lofiPlayer} loop>
        Browser does not support audio
      </audio>
      <audio src={rainUrl} ref={rainPlayer} loop>
        Browser does not support audio
      </audio>

      <Grid item xs={12} sm={8}>
        <Player
          play={masterPlay}
          setPlay={setMasterPlay}
          volume={masterVolume}
          setVolume={setMasterVolume}
          rainPlayer={rainPlayer}
          lofiPlayer={lofiPlayer}
          setRainPlay={setRainPlay}
          setLofiPlay={setLofiPlay}
        />
      </Grid>
      <Grid item xs={12} sm={1} sx={{ marginRight: 0 }}>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                sx={{
                  backgroundColor: "#121212",
                  padding: "1rem",
                  width: 200,
                }}
              >
                <MiniPlayer
                  title="Music"
                  player={lofiPlayer}
                  play={lofiPlay}
                  setPlay={setLofiPlay}
                  volume={lofiVolume}
                  setVolume={setLofiVolume}
                  masterVolume={masterVolume}
                />
                <MiniPlayer
                  title="Rain Effect"
                  player={rainPlayer}
                  play={rainPlay}
                  setPlay={setRainPlay}
                  volume={rainVolume}
                  setVolume={setRainVolume}
                  masterVolume={masterVolume}
                />
              </Paper>
            </Fade>
          )}
        </Popper>

        <Stack direction="row" alignItems="center">
          <Box display={{ sm: "none" }}>
            <IconButton
              onClick={handleOpen("top-end")}
              sx={{ color: "#2979ff" }}
            >
              <Settings />
            </IconButton>
          </Box>
          <Box display={{ xs: "none", sm: "flex" }}>
            <IconButton
              onClick={handleOpen("top-end")}
              sx={{ color: "#2979ff" }}
            >
              <Settings />
            </IconButton>
          </Box>
          <Typography
            align="center"
            color={"white"}
            display={{ sm: "none" }}
            sx={{
              fontFamily: "monospace",
              fontSize: matches ? "1.5rem" : "1rem",
              marginLeft: "1.5rem",
            }}
          >
            Sound Settings
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Stack direction="row" alignItems="center">
          <Box display={{ sm: "none" }}>
            <IconButton
              sx={{ color: "#2979ff" }}
              onClick={() => {
                cb();
              }}
            >
              <ChangeCircleIcon />
            </IconButton>
          </Box>
          <Box display={{ xs: "none", sm: "flex" }}>
            <IconButton
              sx={{ color: "#2979ff" }}
              onClick={() => {
                cb();
              }}
            >
              <ChangeCircleIcon />
            </IconButton>
          </Box>
          <Typography
            align="center"
            color={"white"}
            display={{ sm: "none" }}
            sx={{
              fontFamily: "monospace",
              fontSize: matches ? "1.5rem" : "1rem",
              marginLeft: "1.5rem",
            }}
          >
            Change Background
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
