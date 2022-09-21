import { useEffect, useState } from "react";
import axios from "../axios.js";
import "../styles/ProductShot.css";
import Product from "./Product.jsx";

function ProductShot({ request }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await axios.get(request);
      setProduct(products.data);
      return products;
    }
    fetchData();
  }, []);

  const ProductsCount = (count) => {
    let products = [];
    for (let i = 0; i < count; i++) {
      products.push(<Product product={product[i]} key={i}></Product>);
    }
    // console.log(products);
    return products;
  };

  if (product.length > 0) {
    return <div className="product__shot">{ProductsCount(10)}</div>;
  }
}

export default ProductShot;
