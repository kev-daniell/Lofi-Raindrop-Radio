import Image from "next/image";
import city from "../../public/city.jpg";
import city2 from "../../public/city2.jpg";
import { Inter } from "next/font/google";
import { Box, Grid } from "@mui/material";
import Console from "@/components/Console";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [image, setImage] = useState("city1");

  const changeBackground = () => {
    const newImage = image == "city" ? "city2" : "city";
    setImage(newImage);
  };
  return (
    <Grid container justifyContent={"center"} display={"flex"}>
      <Box className="image-container">
        <Image
          src={image == "city" ? city : city2}
          fill
          alt="picture of city"
          className="image"
        ></Image>
      </Box>
      <Console cb={changeBackground} />
    </Grid>
  );
}
