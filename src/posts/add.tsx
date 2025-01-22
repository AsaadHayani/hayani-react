import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import Success from "../components/Success";
import Error from "../components/Error";
import { toast } from "react-toastify";
import { z } from "zod";

const Add = () => {
  const postSchema = z.object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters long")
      .nonempty("Title is required"),
    body: z
      .string()
      .min(10, "Body must be at least 10 characters long")
      .nonempty("Body is required"),
  });

  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const [errors, setErrors] = useState<{ title?: string; body?: string }>({});

  const navigate = useNavigate();

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const dynamicSchema = z.object({
      [name]: postSchema.shape[name as keyof typeof postSchema.shape],
    });

    const fieldValidation = dynamicSchema.safeParse({ [name]: value });

    if (!fieldValidation.success) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldValidation.error.errors[0].message,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
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
    onSuccess: () => {
      toast.success("Post created successfully");
      navigate("/posts");
    },
  });

  const handleSubmit = () => {
    const validation = postSchema.safeParse(form);
    if (!validation.success) {
      const fieldErrors: any = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    mutate();
  };

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
          error={!!errors.title}
          helperText={errors.title}
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
          error={!!errors.body}
          helperText={errors.body}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        className="shadow"
        fullWidth
        onClick={() => handleSubmit()}
      >
        Create Post
      </Button>
    </Container>
  );
};

export default Add;
