import { Box, Button, Container, IconButton, Paper } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Success from "../components/Success";
import TableMd from "./TableMd";
import CardXs from "./CardXs";
import { useState } from "react";
import { GridOn, ViewDay } from "@mui/icons-material";
import { toast } from "react-toastify";

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
    onSuccess: (_, id) => {
      toast.success("Post deleted successfully");
      queryClient.setQueryData(["posts"], (oldData: any) => {
        if (!oldData) return [];
        return oldData.filter((post: any) => post.id !== id);
      });
    },
  });

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}
      {pendingDel && <Loading open={pendingDel} setOpen={pendingDel} />}
      {isSuccess && <Success success={isSuccess} />}
      <Box sx={{ width: "100%", my: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Link to="add" style={{ flex: 9 }}>
            <Button
              variant="contained"
              color="primary"
              className="shadow"
              sx={{ width: "100%" }}
            >
              Create Post
            </Button>
          </Link>
          <IconButton
            color="primary"
            sx={{ flex: 1, borderRadius: 0 }}
            onClick={() => setIsSmallScreen(!isSmallScreen)}
          >
            {isSmallScreen ? <ViewDay /> : <GridOn />}
          </IconButton>
        </Box>
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
