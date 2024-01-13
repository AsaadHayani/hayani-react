import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});

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
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => {
        // console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Container className="mt-3">
      <div className="border border-primary shadow p-3">
        <h1 className="display-6 font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <hr />
      <div>
        <h4 className="text-center text-success">Comments</h4>
        <div>{comments.name}</div>
      </div>
      <Link className="btn btn-primary w-100" to="/posts">
        Home
      </Link>
    </Container>
  );
};

export default Details;
