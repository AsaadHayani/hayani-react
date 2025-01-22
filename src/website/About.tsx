import { Check } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { itemsAboutPage } from "../components/assets";

const About = () => {
  const theme = useTheme();

  return (
    <Box className="about" py={2} bgcolor={theme.palette.myBgc.main}>
      <Container>
        <Typography variant="h4" color="primary" mb={1}>
          About Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box className="info">
              <Typography variant="body1" color="text.secondary">
                Very organized and hard working I am looking for a responsible
                position to gain some work experience. I have solid experience
                in Bootstrap, Jquery, Javascript, PHP, MySQL and procient with
                framework Laravel for Backend (Platform Study Learning Project),
                React.Js for frontend, and I have many projects. I learned
                developed mobile apps using Flutter. I have minimal experience
                with NodeJs, ExpressJs and MongoDB. I have a program similar to
                Word, a program to print invoices in the store, and Todolist by
                C# WinForms.
              </Typography>
              <List>
                {itemsAboutPage.map((item) => (
                  <Box key={item.text} display="flex" gap={1}>
                    <Check color="primary" />
                    <ListItem disablePadding sx={{ width: "auto" }}>
                      <ListItemText
                        primary={item.text}
                        sx={{ color: theme.palette.myGrey.main }}
                      />
                    </ListItem>
                    <a
                      href={item.link}
                      target="_blank"
                      style={{ color: theme.palette.primary.main }}
                      rel="noopener noreferrer"
                    >
                      {item.linkText}
                      {item.linkText != null && (
                        <OpenInNew sx={{ ml: "5px" }} />
                      )}
                    </a>
                  </Box>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <img
              src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Asaad Hayani"
              width="280px"
              height="270px"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
