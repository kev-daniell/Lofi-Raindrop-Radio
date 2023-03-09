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
          bottom: 10,
          width: "70%",
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <Grid item xs={6}>
          <Typography
            align="center"
            color={"white"}
            sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            Rain Effect
          </Typography>
          <Player />
        </Grid>
        <Grid item xs={6}>
          <Typography
            align="center"
            color={"white"}
            sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            Music
          </Typography>
          <Player />
        </Grid>
      </Grid>
    </Box>
  );
}
