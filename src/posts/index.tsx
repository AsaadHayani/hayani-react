import {
  Box,
  Button,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Success from "../components/Success";
import TableMd from "./TableMd";
import CardXs from "./CardXs";

const Index = () => {
  const fetchPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return response.data;
  };

  const { data: posts, isPending } = useQuery({
    queryFn: fetchPosts,
    queryKey: ["posts"],
  });

  const queryClient = useQueryClient();
  const deletePost = async (id: any) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  };

  const { mutate, isSuccess, isPending: pendingDel } = useMutation({
    mutationFn: (id: any) => deletePost(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}
      {pendingDel && <Loading open={pendingDel} setOpen={pendingDel} />}
      {isSuccess && <Success success={isSuccess} />}
      <Box sx={{ width: "100%", my: 2 }}>
        <Link to="add">
          <Button
            variant="contained"
            color="primary"
            className="shadow"
            sx={{ width: "100%", mb: 2 }}
          >
            Create Post
          </Button>
        </Link>
        <Paper sx={{ width: "100%", mt: 2 }} className="shadow">
          {isSmallScreen ? (
            <CardXs {...{ mutate, posts }} />
          ) : (
            <TableMd {...{ mutate, posts }} />
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Index;
