import {
  Container,
  Paper,
  Typography,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Details = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  };
  const { data: post, isPending } = useQuery({
    queryFn: fetchPost,
    queryKey: ["post"],
  });

  const fetchComment = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    return response.data;
  };
  const { data: comment } = useQuery({
    queryFn: fetchComment,
    queryKey: ["comments"],
  });

  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}
      <Paper
        className="shadow"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          padding: "20px",
          border: 1,
          borderColor: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color={theme.palette.primary.main}>
          {post?.title}
        </Typography>
        <Typography variant="h5" color="inherit">
          {post?.body}
        </Typography>
        <Divider sx={{ borderColor: theme.palette.primary.main }} />
        <Typography variant="h5" color={theme.palette.primary.main}>
          Comments:
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {comment?.body}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="shadow"
          fullWidth
          onClick={() => navigate(-1)}
        >
          Posts Page
        </Button>
      </Paper>
    </Container>
  );
};

export default Details;
