import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import Success from "../components/Success";
import Error from "../components/Error";

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleFormChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createPost = async () => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      form
    );
    return response.data;
  };
  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationFn: createPost,
    onSuccess: () => navigate("/posts"),
  });
  return (
    <Container>
      {isPending && <Loading open={isPending} setOpen={isPending} />}
      {isSuccess && <Success success={isSuccess} />}
      {isError && <Error error={error} />}
      <Box my="20px">
        <Typography variant="body1" color="primary" mb="5px">
          Title:
        </Typography>
        <TextField
          type="text"
          value={form.title}
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
          value={form.body}
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
        className="shadow"
        fullWidth
        onClick={() => mutate()}
      >
        Create Post
      </Button>
    </Container>
  );
};

export default Add;
