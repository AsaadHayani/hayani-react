import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29aa4a51-257d-4ae8-bdb8-33ba45792408");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const theme = useTheme();
  return (
    <Box p={2} textAlign="center" bgcolor={theme.palette.myBgc.main}>
      <Container>
        <Typography variant="h4" color="primary" textAlign="center" my={2}>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Firsta name"
                required
                type="text"
                name="name"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Last name"
                type="text"
                name="bcc"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                type="email"
                required
                name="email"
                label="Email"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                label="Phone"
                type="number"
                name="subject"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                name="message"
                required
              />
            </Grid>
          </Grid>
          <Typography variant="body1" color="primary">
            {result}
          </Typography>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
