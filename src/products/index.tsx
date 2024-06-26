import { Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import Product from "./Product";

const Products = () => {
  const fetchProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
  };
  const { data: products, isPending } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}

      <Typography variant="h4" my={2} color="primary" textAlign="center">
        Products
      </Typography>
      <Grid container spacing={2}>
        {products?.map((product: any, index: number) => (
          <Product key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
