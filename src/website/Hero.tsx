import { CloudDownload } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box className="hero">
      <Typography variant="h2" color="white">
        My Website - Using REACT.JS
        <br />
        BY Asaad Hayani
      </Typography>
      <Typography variant="body1" color="grey" mb={2}>
        Freelancer
      </Typography>
      <Button
        variant="contained"
        color="primary"
        endIcon={<CloudDownload />}
        download
        href="./cv.pdf"
        className="shadow"
      >
        Download C.V
      </Button>
    </Box>
  );
};

export default Hero;
