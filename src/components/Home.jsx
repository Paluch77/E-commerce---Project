import React from "react";
import Header from "./Header.jsx";
import ProductShot from "./ProductShot.jsx";
import requests from "../requests";

function Home() {
  return (
    <div>
      <Header></Header>
      <ProductShot request={requests.products}></ProductShot>
    </div>
  );
}

export default Home;
