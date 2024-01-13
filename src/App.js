import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Add,
  Details,
  Ecommerce,
  Edit,
  Gallery,
  Header,
  Home,
  Posts,
  ProductDetails,
  Todo,
} from "./exports";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<Todo />} />
          <Route path="posts" element={<Posts />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="ecommerce/:id" element={<ProductDetails />} />
          <Route path="add" element={<Add />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="update/:id" element={<Edit />} />
          <Route
            path="*"
            element={
              <h2 className="text-center pt-3 text-danger">Page Not Found</h2>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
