import * as React from "react";
import Container from "@mui/material/Container";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ background: "black", zIndex: 1 }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "2rem",
            }}
          >
            Lofi Raindrop Radio
          </Typography>

          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              variant="h5"
              textAlign={"center"}
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1.3rem",
              }}
            >
              Lofi Raindrop Radio
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
