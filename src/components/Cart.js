import React from "react";
import Product from "./Product";

export default function Cart({ cart, emptyCart, removeToCart }) {
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <h2>
        Sepetiniz
        <button className="btn delete" onClick={emptyCart}>
          Sepeti Boşalt
        </button>{" "}
      </h2>

      <h4>Ürün Adedi: {totalQuantity}</h4>
      <h4>Ürün Tutarı: {totalPrice} TL</h4>
      <div className="products">
        {cart.map(({ name, price, id, quantity }) => {
          return (
            <Product
              key={id}
              name={name}
              price={price}
              quantity={quantity}
              removeToCart={() => removeToCart({ name, id, price })}
            />
          );
        })}
      </div>
    </>
  );
}
