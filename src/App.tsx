import Todo from "./Todos/Todo.tsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./posts/index.tsx";
import Add from "./posts/add.tsx";
import Edit from "./posts/edit.tsx";
import Details from "./posts/details.tsx";
import DrawerAppBar from "./components/AppBar.tsx";
import Gallery from "./gallery/index.tsx";
import Products from "./products/index.tsx";
import Site from "./website/site.tsx";
import Typography from "@mui/material/Typography";
import DetailsProducts from "./products/details.tsx";
import Footer from "./components/Footer.tsx";
import { Box } from "@mui/material";
import Qoute from "./qoute/index.tsx";
import Quiz from "./quiz/index.tsx";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <DrawerAppBar />
      <Routes>
        <Route path="/">
          <Route index element={<Site />} />
          <Route path="/posts">
            <Route index element={<Index />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<DetailsProducts />} />
          </Route>
          <Route path="qoute" element={<Qoute />} />
          <Route path="quiz" element={<Quiz />} />
          <Route
            path="*"
            element={
              <Typography variant="h5" color="primary" textAlign="center">
                Page Not Found
              </Typography>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
