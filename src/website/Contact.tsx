import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box p={2} textAlign="center" bgcolor={theme.palette.myBgc.main}>
      <Container>
        <Typography variant="h4" color="primary" textAlign="center" my={2}>
          Contact Us
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Firsta name"
                required
                type="email"
                name="cc"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Last name"
                required
                type="email"
                name="bcc"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                type="email"
                required
                name="to"
                label="Email"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                label="Phone"
                type="number"
                required
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
                name="body"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
