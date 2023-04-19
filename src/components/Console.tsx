import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Popper,
  PopperPlacementType,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useState } from "react";
import Player from "./Player";
import { Settings } from "@mui/icons-material";

export default function Console({ cb }: { cb: Function }) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

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
        bottom: 120,
        width: "90%",
        left: matches ? 10 : 0,
        right: matches ? 30 : 30,
        margin: "auto",
      }}
    >
      <Grid item xs={12} sm={5}>
        <Typography
          align="center"
          color={"white"}
          sx={{
            fontFamily: "monospace",
            fontSize: matches ? "1.5rem" : "1rem",
          }}
        >
          Rain Effect
        </Typography>
        <Player musicSrc="rain.mp3" />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography
          align="center"
          color={"white"}
          sx={{
            fontFamily: "monospace",
            fontSize: matches ? "1.5rem" : "1rem",
          }}
        >
          Music
        </Typography>
        <Player musicSrc="lofi.mp3" />
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
              <Paper sx={{ backgroundColor: "#262626", paddingX: "1rem" }}>
                <Typography
                  align="center"
                  color={"white"}
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1rem",
                  }}
                >
                  Music
                </Typography>
                <Slider size="small" />
                <Typography
                  align="center"
                  color={"white"}
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1rem",
                  }}
                >
                  Rain Effect
                </Typography>

                <Slider size="small" />
              </Paper>
            </Fade>
          )}
        </Popper>

        <IconButton
          onClick={handleOpen("top-end")}
          sx={{ marginTop: "2.3rem", color: "#2979ff" }}
        >
          <Settings />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={1}>
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
              sx={{ marginTop: "2.3rem", color: "#2979ff" }}
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
              marginTop: "1.5rem",
            }}
          >
            Change Background
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
