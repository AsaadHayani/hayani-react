import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Edit = () => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleFormChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
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

  const updatePost = async () => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      form
    );
    return response.data;
  };
  const { mutate: mutatePage, isPending: pendingPage } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => navigate("/posts"),
  });

  useEffect(() => {
    if (post) {
      setForm({
        ...post,
      });
    }
  }, [post]);

  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}
      {pendingPage && <Loading open={pendingPage} setOpen={pendingPage} />}
      <Box my="20px">
        <Typography variant="body1" color="primary" mb="5px">
          Title:
        </Typography>
        <TextField
          type="text"
          value={form.title || ""}
          onChange={handleFormChange}
          name="title"
          label="Title"
          size="small"
          // error={!!errors.title}
          // helperText={errors.title}
          fullWidth
        />
      </Box>
      <Box mb="20px">
        <Typography variant="body1" color="primary" mb="5px">
          Body:
        </Typography>
        <TextField
          type="text"
          value={form.body || ""}
          onChange={handleFormChange}
          name="body"
          label="Body"
          size="small"
          // error={!!errors.body}
          // helperText={errors.body}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="shadow"
        onClick={() => mutatePage()}
      >
        Update Post
      </Button>
    </Container>
  );
};

export default Edit;
