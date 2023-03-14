import Image from "next/image";
import city from "../../public/city.jpg";
<<<<<<< Updated upstream
=======
import city2 from "../../public/city2.jpg";
>>>>>>> Stashed changes
import { Inter } from "next/font/google";
import Player from "@/components/Player";
import { Box, Grid } from "@mui/material";
import Console from "@/components/Console";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
<<<<<<< Updated upstream
=======
  const [image, setImage] = useState("city1");

  const changeBackground = () => {
    console.log("hello");
    const newImage = image == "city" ? "city2" : "city";
    setImage(newImage);
  };
>>>>>>> Stashed changes
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
