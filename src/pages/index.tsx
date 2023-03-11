import Image from "next/image";
import city from "../../public/city2.jpg";
import { Inter } from "next/font/google";
import { Box, Grid } from "@mui/material";
import Console from "@/components/Console";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [image, setImage] = useState<string>();
  return (
    <Grid container justifyContent={"center"} display={"flex"}>
      <Box className="image-container">
        <Image src={city} fill alt="picture of city" className="image"></Image>
      </Box>
      <Console />
    </Grid>
  );
}
