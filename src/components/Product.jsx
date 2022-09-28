import { useParams } from "react";
import "../styles/Product.css";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link className="dupa" to={"product/" + product.id}>
      <div className="product" key={product.id}>
        <header className="product__header">
          <img
            src={product.image}
            alt="git"
            className="header--thumbnail"
          ></img>
          <p className="header--username">Username</p>
        </header>
        <main className="product__main">
          <img src={product.image} alt="git" className="main--image"></img>
        </main>
        <footer className="product__footer">
          <p className="footer--price">{product.price}zl</p>
          <p className="footer--size">Size: {product.rating.rate}</p>
          <p className="footer-brand">Adidas</p>
        </footer>
      </div>
    </Link>
  );
}

export default Product;
