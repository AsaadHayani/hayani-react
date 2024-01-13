import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    fetchPost();
  };

  const fetchPost = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <Container>
      <Form method="POST" className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={title}
            placeholder="Title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setBody(e.target.value)}
            defaultValue={body}
            placeholder="Body"
            required
          />
        </Form.Group>
        <Button className="w-100" onClick={handleCreate}>
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default Add;
