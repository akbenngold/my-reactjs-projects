import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import "./App.css";
function App() {
  const [cart, setCart] = useState(["hey", "how", "when", "who"]);
  const addToCart = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });

    console.log("hiiiii");
  };
  return (
    <div>
      <CartProvider value={{ cart, addToCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/women" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
