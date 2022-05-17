import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Pay from "./pages/Pay";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import Register from "./pages/register";
import Success from "./pages/Success";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:params" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
