import "./styles//App.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductSite from "./components/ProductSite.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductSite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
