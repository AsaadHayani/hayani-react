import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";
import Categories from "./Categories";
import { Loading } from "../exports";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const api = "https://fakestoreapi.com/products";
  const getProducts = async () => {
    axios.get(api).then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  };
  const getCategories = async () => {
    axios.get(`${api}/categories`).then((res) => {
      // console.log(res.data);
      setCategories(res.data);
    });
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  const getProductInCategories = async (catName) => {
    axios.get(`${api}/category/${catName}`).then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  };
  return (
    <>
      <h2 className="mt-3 mb-0 text-center">Products</h2>
      <Categories
        cats={categories}
        method={getProductInCategories}
        getProducts={getProducts}
      />
      <Row xs={1} sm={2} md={3} lg={4} className="mt-3">
        {products !== null ? (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <Loading />
        )}
      </Row>
    </>
  );
};

export default ProductsList;
