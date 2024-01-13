import { ListGroup } from "react-bootstrap";

const Categories = ({ cats, method, getProducts }) => {
  return (
    <ListGroup horizontal className="justify-content-center mt-3">
      <ListGroup.Item
        role="button"
        className="border-black"
        onClick={() => getProducts()}
      >
        All
      </ListGroup.Item>
      {cats.map((item) => {
        return (
          <ListGroup.Item
            key={item}
            role="button"
            className="border-black"
            onClick={() => method(item)}
          >
            {item}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Categories;
