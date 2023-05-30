import React from "react";
import Product from "./Product";

export default function Products({ products, addToCart, cart }) {
  return (
    <div>
      <h1>Ürünler</h1>
      <div className="products">
        {products.map(({ id, name, price }) => {
          const cartItem = cart.find((item) => item.id === id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <Product
              key={id}
              name={name}
              price={price}
              quantity={quantity}
              addToCart={() => addToCart({ id, name, price })}
            />
          );
        })}
      </div>
    </div>
  );
}
