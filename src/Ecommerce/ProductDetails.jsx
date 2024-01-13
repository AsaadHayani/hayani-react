import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, []);
  return (
    <Container>
      <Card className="mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <Card.Body>
            <Card.Title className="text-decoration-underline">
              {product.title}
            </Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}$</Card.Text>
          </Card.Body>
          <img src={product.image} alt="" height={250} />
        </div>
      </Card>
    </Container>
  );
};

export default ProductDetails;
