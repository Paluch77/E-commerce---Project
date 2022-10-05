import "./styles//App.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductSite from "./components/ProductSite.jsx";
import NewItem from "./components/NewItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductSite />} />
          <Route path="/item/new" element={<NewItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
