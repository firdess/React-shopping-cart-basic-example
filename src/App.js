import { useCallback, useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./styles.css";

const phones = [
  { id: 1, name: "iPhone 12", price: 14000 },
  { id: 2, name: "Galaxy S20", price: 6500 },
  { id: 3, name: "Huawei P40", price: 10000 }
];

export default function App() {
  const [products] = useState(phones);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeToCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} cart={cart} />
      <Cart cart={cart} emptyCart={emptyCart} removeToCart={removeToCart} />
    </div>
  );
}
