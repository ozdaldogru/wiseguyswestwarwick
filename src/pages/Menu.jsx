import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <>
      <Box sx={{ my: 5, ml: 10, fontSize: "30px", textAlign: "center", "& h2": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h2">Menu</Typography>
        <p>
          Please Click on Any Item Below To Get Order Page
        </p>

      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center", fontWeight: "large" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <a href="https://wiseguyswwarwick.cuteorder.com" target="blank">

              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
              </CardContent>
              </a>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Menu;
