import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import React from "react";
import Player from "./Player";

export default function Console({ cb }: { cb: Function }) {
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
        <Grid item xs={12} sm={5}>
          <Typography
            align="center"
            color={"white"}
            sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            Rain Effect
          </Typography>
          <Player musicSrc="rain.mp3" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            align="center"
            color={"white"}
            sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}
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
                sx={{ marginTop: "1.5rem", color: "#2979ff" }}
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
                fontSize: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              Change Background
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
