import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        mb={0}
        py={2}
      >
        All Rights Reseved&copy; 2024 for
        <Typography component="span" color="white">
          {" "}
          Asaad Hayani.
        </Typography>
      </Typography>
    </footer>
  );
};

export default Footer;
