import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailsProducts = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  };
  const { data: product, isPending } = useQuery({
    queryFn: fetchProduct,
    queryKey: ["products"],
  });

  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}

      <Paper
        className="shadow"
        sx={{
          mt: 2,
          border: 1,
          borderColor: theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
          overflow: "hidden",
          mb: 3,
        }}
      >
        <Box paddingInlineStart={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ textDecoration: "underline" }}
              color="primary"
            >
              {product?.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ textDecoration: "underline" }}
              color="inherit"
            >
              ${product?.price}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {product?.description}
          </Typography>
        </Box>
        <img src={`${product?.image}`} alt="" width="150" />
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className="shadow"
        fullWidth
        onClick={() => navigate(-1)}
        startIcon={<ArrowBackIcon />}
      >
        Products Page
      </Button>
    </Container>
  );
};

export default DetailsProducts;
