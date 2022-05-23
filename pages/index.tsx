import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SideBar from "../components/side-bar/SideBar";

const Home = () => {

  

  return (
    <Grid
      container
      direction={"row"}
      sx={{ alignItems: "stretch", height: "100vh", p: 0 }}
    >
      <Grid item sx={{ background: "#201D47", height: "100%", p: 4 }} lg={2}>
        <Box><SideBar/></Box>
      </Grid>
      <Grid item sx={{ background: "#17163B", height: "100%", p: 4 }} lg={10}>
        <Box>main</Box>
      </Grid>
    </Grid>
  );
};
export default Home;
