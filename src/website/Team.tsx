import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Card, Grid, List, ListItem, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const Team = () => {
  const items = [
    {
      name: "Asaad Hayani",
      image: "https://i.pravatar.cc/300",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
      social: {
        facebook: "https://www.facebook.com/asaad.hayani.9/",
        linkedin: "https://www.linkedin.com/in/as3d-7ayani/",
        github: "https://github.com/AsaadHayani",
      },
    },
    {
      name: "Sami Khalil",
      image: "https://i.pravatar.cc/301",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
      social: {
        facebook: "https://www.facebook.com/asaad.hayani.9/",
        linkedin: "https://www.linkedin.com/in/as3d-hayani/",
        github: "https://github.com/AsaadHayani",
      },
    },
    {
      name: "Ahmed Ismaeel",
      image: "https://i.pravatar.cc/302",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
      social: {
        facebook: "https://www.facebook.com/asaad.hayani.9/",
        linkedin: "https://www.linkedin.com/in/as3d-hayani/",
        github: "https://github.com/AsaadHayani",
      },
    },
  ];

  const theme = useTheme();

  return (
    <Box className="our-team" px={2} textAlign="center">
      <Typography variant="h4" color="primary" textAlign="center" my={2}>
        Our Team
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => {
          return (
            <Grid item xs={12} md={4} key={item.name}>
              <Card className="item" key={item.name}>
                <img src={item.image} alt="" />
                <Card className="info" sx={{ bgcolor: "transparent" }}>
                  <Typography variant="h4" color="white">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color={theme.palette.myGrey.main}>
                    {item.desc}
                  </Typography>
                  <Box>
                    <List>
                      <ListItem disablePadding>
                        <a
                          href={item.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHub />
                        </a>
                      </ListItem>
                      <ListItem disablePadding>
                        <a
                          href={item.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedIn />
                        </a>
                      </ListItem>
                      <ListItem disablePadding>
                        <a
                          href={item.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook />
                        </a>
                      </ListItem>
                    </List>
                  </Box>
                </Card>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Team;
