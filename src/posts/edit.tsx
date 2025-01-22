import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { z } from "zod";

const Edit = () => {
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

  type FormTypeProps = z.infer<typeof postSchema>;

  const [form, setForm] = useState<FormTypeProps>({
    title: "",
    body: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormTypeProps, string>>
  >({});

  const navigate = useNavigate();

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const fieldValidation = postSchema
      .pick({ [name]: true })
      .safeParse({ [name]: value });
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
    onSuccess: () => {
      toast.success("Post updated successfully");
      navigate("/posts");
    },
  });

  useEffect(() => {
    if (post) {
      setForm({
        ...post,
      });
    }
  }, [post]);

  const handleSubmit = () => {
    const validation = postSchema.safeParse(form);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof FormTypeProps, string>> = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof FormTypeProps] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    mutatePage();
  };

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
          value={form.body || ""}
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
        fullWidth
        className="shadow"
        onClick={() => handleSubmit()}
      >
        Update Post
      </Button>
    </Container>
  );
};

export default Edit;
