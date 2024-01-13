import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Col>
      <Card className="overflow-hidden">
        <Card.Img variant="top" src={product.image} height={200} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/ecommerce/${product.id}`} className="btn btn-primary">
            Details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
