import { Box, Container, Typography } from "@mui/material";

const Testimo = () => {
  const data = [
    {
      image: "https://i.pravatar.cc/300",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, numquam saepe maiores animi harum error inventore amet incidunt cumque, excepturi a architecto aliquid ex vitae explicabo asperiores repellat! Assumenda, magnam.",
      name: "Asaad Hayani",
    },
  ];
  return (
    <Box p={2} textAlign="center" className="testimonials">
      <Container>
        <Typography variant="h4" color="primary" textAlign="center" my={2}>
          Testimonials
        </Typography>
        {data.map((item) => {
          return (
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
          );
        })}
      </Container>
    </Box>
  );
};

export default Testimo;
