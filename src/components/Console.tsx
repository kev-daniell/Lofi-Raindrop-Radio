import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Player from "./Player";

export default function Console() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={4}
        sx={{
          position: "absolute",
          bottom: 80,
          width: "70%",
          left: 0,
          right: 20,
          margin: "auto",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            align="center"
            color={"white"}
            sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            Rain Effect
          </Typography>
          <Player musicSrc="rain.mp3" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            align="center"
            color={"white"}
            sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            Music
          </Typography>
          <Player musicSrc="lofi.mp3" />
        </Grid>
      </Grid>
    </Box>
  );
}
