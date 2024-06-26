import "./site.css";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Testimo from "./Testimo";
import Contact from "./Contact";
import Team from "./Team";
import { Divider, useTheme } from "@mui/material";

const Site = () => {
  const theme = useTheme();

  return (
    <>
      <Hero />
      <About />
      <Divider sx={{ borderColor: theme.palette.primary.main, my: 2 }} />
      <Team />
      <Divider sx={{ borderColor: theme.palette.primary.main, my: 2 }} />
      <Work />
      <Divider sx={{ borderColor: theme.palette.primary.main, my: 2 }} />
      <Testimo />
      <Divider sx={{ borderColor: theme.palette.primary.main, my: 2 }} />
      <Contact />
    </>
  );
};

export default Site;
