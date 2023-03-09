import Image from "next/image";
import city from "../../public/city.jpg";
import { Inter } from "next/font/google";
import Player from "@/components/Player";
import { Box, Grid } from "@mui/material";
import Console from "@/components/Console";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Grid container justifyContent={"center"} display={"flex"}>
      <Box className="image-container">
        <Image src={city} fill alt="picture of city" className="image"></Image>
      </Box>
      <Console />
    </Grid>
  );
}
