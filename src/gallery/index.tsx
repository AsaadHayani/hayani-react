import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./gallery.css";
import { useState } from "react";

const Gallery = () => {
  const imgs = [
    {
      id: 1,
      src: "https://picsum.photos/200/100",
    },
    {
      id: 2,
      src: "https://picsum.photos/201/100",
    },
    {
      id: 3,
      src: "https://picsum.photos/202/100",
    },
    {
      id: 4,
      src: "https://picsum.photos/203/100",
    },
    {
      id: 5,
      src: "https://picsum.photos/204/100",
    },
  ];

  const [sliderData, setSliderData] = useState(imgs[3]);

  const clickImg = (id: number) => {
    // console.log(id);
    const slider = imgs[id];
    setSliderData(slider);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Paper
        sx={{
          border: 1,
          textAlign: "center",
          p: 2,
          mt: 2,
          borderColor: theme.palette.primary.main,
        }}
        className="shadow gal"
      >
        <img
          src={sliderData.src}
          alt=""
          style={{
            border: 3,
            borderStyle: "solid",
            borderColor: theme.palette.primary.main,
          }}
          height="200"
          width="400"
        />
        <Divider sx={{ borderColor: theme.palette.primary.main, my: 2 }} />
        {isSmallScreen ? (
          <Grid container spacing={2}>
            {imgs.map((img, id) => (
              <Grid key={img.id} item xs={12}>
                <img
                  src={img.src}
                  className="img"
                  style={
                    sliderData.id === id + 1
                      ? {
                          borderRadius: 100,
                        }
                      : {
                          borderRadius: 5,
                        }
                  }
                  alt=""
                  onClick={() => clickImg(id)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box display="flex" justifyContent="space-evenly" gap={2}>
            {imgs.map((img, id) => (
              <Box key={img.id}>
                <img
                  src={img.src}
                  className="img"
                  style={
                    sliderData.id === id + 1
                      ? {
                          borderRadius: 100,
                        }
                      : {
                          borderRadius: 5,
                        }
                  }
                  alt=""
                  onClick={() => clickImg(id)}
                />
              </Box>
            ))}
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Gallery;
