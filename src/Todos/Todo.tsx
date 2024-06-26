import Container from "@mui/material/Container";
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { Delete, ModeEdit } from "@mui/icons-material";

interface Todo {
  completed: boolean;
  text: string;
}

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const theme = useTheme();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    const todoCompleted: Todo = { completed: false, text: input };
    setTodos([...todos, todoCompleted]);
    setInput("");
  };

  const handleItemUpdate = (index: number) => {
    const updatedText = prompt("Edit todo:", todos[index].text);
    if (updatedText !== null) {
      const newTodos = [...todos];
      newTodos[index].text = updatedText;
      setTodos(newTodos);
    }
  };

  const handleItemDone = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleItemDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Paper
        component="form"
        className="shadow"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          padding: "20px",
          border: 1,
          mt: 2,
          alignItems: "center",
          borderColor: theme.palette.primary.main,
        }}
      >
        <Typography variant="h4" color="inherit" textAlign="center">
          To Do List
        </Typography>
        {todos.length !== 0 ? (
          todos.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              border={1}
              borderColor={theme.palette.primary.main}
              borderRadius={2}
              width="70%"
            >
              <Button onClick={() => handleItemDone(index)}>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </Typography>
              </Button>
              <Box display="flex" gap={1}>
                <IconButton
                  size="large"
                  color="success"
                  onClick={() => handleItemUpdate(index)}
                >
                  <ModeEdit fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="large"
                  color="error"
                  onClick={() => handleItemDelete(index)}
                >
                  <Delete fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="h5" color="primary" textAlign="center">
            No Items Found!
          </Typography>
        )}
        <TextField
          fullWidth
          label="Enter Item"
          variant="outlined"
          className="shadow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className="shadow"
          fullWidth
          onClick={handleAddTodo}
          type="submit"
        >
          Add Item
        </Button>
      </Paper>
    </Container>
  );
}

export default Todo;
