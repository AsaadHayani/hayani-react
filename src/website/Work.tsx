import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";

const Work = () => {
  const images = [
    "https://picsum.photos/180/101",
    "https://picsum.photos/180/102",
    "https://picsum.photos/180/103",
    "https://picsum.photos/180/104",
  ];

  const theme = useTheme();

  return (
    <Box
      p={2}
      textAlign="center"
      className="work"
      bgcolor={theme.palette.myBgc.main}
    >
      <Typography variant="h4" color="primary" textAlign="center" my={2}>
        Our Works
      </Typography>
      <Grid container spacing={2}>
        {images.map((src) => {
          return (
            <Grid item xs={12} md={3} key={src}>
              <img src={src} alt="" key={src} />
            </Grid>
          );
        })}
      </Grid>
      <Box className="arrows" mt={2}>
        <IconButton onClick={() => console.log(1)}>
          <ChevronLeft color="primary" />
        </IconButton>
        <IconButton onClick={() => console.log(1)}>
          <ChevronRight color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Work;
