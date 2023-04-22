import { Paper, Container, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "10rem",
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "black",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Typography sx={{ color: "grey", fontFamily: "monospace" }}>
            Made with ♡ by{" "}
            <a
              style={{ color: "grey" }}
              target="_blank"
              href="https://github.com/kev-daniell"
            >
              kev-daniell
            </a>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "grey", fontFamily: "monospace" }}
          >
            Inspired By{" "}
            <a
              style={{ color: "grey" }}
              target="_blank"
              href="http://www.soundsofhome.ca"
            >
              SoundsOfHome
            </a>
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
