import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
