import { faClose, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const [updateItem, setUpdateItem] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      const newItem = { complete: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    } else {
      alert("Please enter a non-empty value.");
    }
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const handleItemUpdate = (index) => {
    const updatedText = prompt("Edit todo:", todos[index].text);
    if (updatedText !== null) {
      const newTodos = [...todos];
      newTodos[index].text = updatedText;
      setTodos(newTodos);
    }
  };

  const handleItemDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container>
      <div className="d-flex flex-column gap-4 mt-5 p-3 bg-light shadow border border-primary rounded">
        <h1 className="text-center">To Do List</h1>
        <ul className="list-group gap-2">
          {todos != 0 ? (
            todos.map((todo, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center border border-primary fw-bold"
              >
                <span
                  className={
                    todo.complete ? "text-decoration-line-through" : ""
                  }
                  role="button"
                  onClick={() => handleItemDone(index)}
                >
                  {index + 1} - {todo.text}
                </span>
                <div className="d-flex gap-2">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-success fs-3"
                    role="button"
                    onClick={() => handleItemUpdate(index)}
                  />
                  <FontAwesomeIcon
                    icon={faClose}
                    className="text-danger fs-3"
                    role="button"
                    onClick={() => handleItemDelete(index)}
                  />
                </div>
              </li>
            ))
          ) : (
            <h2 className="text-center text-danger">No Items Found!</h2>
          )}
        </ul>
        <input
          type="text"
          className="form-control shadow border border-black"
          ref={inputRef}
          placeholder="Enter Item..."
          required
        />
        <Button onClick={handleAddTodo} className="w-100 shadow-lg">
          Add Item
        </Button>
      </div>
    </Container>
  );
}

export default Todo;
