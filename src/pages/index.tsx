import Image from "next/image";
import city from "../../public/city.jpg";
import city2 from "../../public/city2.jpg";
import { Inter } from "next/font/google";
import { Box, Grid, useMediaQuery } from "@mui/material";
import Console from "@/components/Console";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const matches = useMediaQuery("(min-width:600px)");
  const [image, setImage] = useState("city1");

  const changeBackground = () => {
    const newImage = image == "city" ? "city2" : "city";
    setImage(newImage);
  };
  return (
    <Grid container justifyContent={"center"} display={"flex"}>
      <Image
        src={image == "city" ? city : city2}
        alt="picture of city"
        className="image"
        height={600}
        style={{
          minWidth: "100%",
          minHeight: "50vh",
          marginTop: matches ? 100 : 0,
        }}
      ></Image>
      <Console cb={changeBackground} />
    </Grid>
  );
}
