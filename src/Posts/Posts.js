// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Table, Modal } from "react-bootstrap";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [errorMsg, setErrorMsg] = useState();

  const [currentPage, setCurrentPage] = useState(1),
    recordsPerPage = 10,
    lastIndex = currentPage * recordsPerPage,
    firstIndex = lastIndex - recordsPerPage,
    records = posts.slice(firstIndex, lastIndex),
    pageNumbers = Math.ceil(posts.length / recordsPerPage),
    numbers = [...Array(pageNumbers + 1).keys()].slice(1);
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  const handlePosts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        setErrorMsg("error");
        setShow(true);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const updatedData = posts.filter((item) => item.id !== id);
      setPosts(updatedData);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Container>
      <Link to="/add" className="btn btn-primary shadow mt-2 w-100">
        Create Post
      </Link>
      <div className="table-responsive mt-2">
        <Table striped hover bordered className="text-center shadow">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records != 0 ? (
              records.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <Link
                        to={`/details/${post.id}`}
                        className="shadow btn btn-success"
                      >
                        Details
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/update/${post.id}`}
                        className="shadow btn btn-warning"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(post.id)}
                        className="shadow"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="text-danger fs-5">
                  The Elements is Not Found, Or Wrong
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{errorMsg}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <nav>
        <ul className="pagination mt-3 bg-white p-0 justify-content-center">
          <li className="page-item">
            <a className="page-link rounded-0" href="#" onClick={prevPage}>
              السابق
            </a>
          </li>
          {numbers.map((num, index) => (
            <li
              className={`page-item ${currentPage == num ? "active" : ""}`}
              key={index}
            >
              <a className="page-link" href="#" onClick={() => changePage(num)}>
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link rounded-0" href="#" onClick={nextPage}>
              التالي
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Posts;
