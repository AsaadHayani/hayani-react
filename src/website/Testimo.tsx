import { Box, Container, Typography } from "@mui/material";
import { itemsTestimoPage } from "../components/assets";

const Testimo = () => (
  <Box p={2} textAlign="center" className="testimonials">
    <Container>
      <Typography variant="h4" color="primary" textAlign="center" my={2}>
        Testimonials
      </Typography>
      {itemsTestimoPage.map((item) => (
        <Box key={item.name}>
          <Box className="info">
            <img src={item.image} alt="" className="mb-2 rounded-circle" />
          </Box>
          <Typography variant="body1" color="myGrey.main">
            {item.desc}
          </Typography>
          <Typography variant="body1" color="primary" fontWeight="bold">
            {item.name}
          </Typography>
        </Box>
      ))}
    </Container>
  </Box>
);

export default Testimo;
