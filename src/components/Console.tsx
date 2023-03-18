import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import React from "react";
import Player from "./Player";
import { match } from "assert";

export default function Console({ cb }: { cb: Function }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      container
      spacing={4}
      sx={{
        position: "absolute",
        bottom: 120,
        width: "90%",
        left: matches ? 80 : 0,
        right: matches ? 0 : 30,
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
      <Grid item xs={12} sm={2}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
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
