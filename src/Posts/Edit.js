import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleEdit = async () => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        body,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error editing post:", error);
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
            defaultValue={post.title}
            placeholder="Title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setBody(e.target.value)}
            defaultValue={post.body}
            placeholder="Body"
            required
          />
        </Form.Group>
        <Button className="w-100" variant="warning" onClick={handleEdit}>
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default Edit;
