import React from "react";

export default function Product({
  name,
  price,
  quantity,
  addToCart,
  removeToCart
}) {
  return (
    <div className="product">
      <div>{name}</div>
      <div> {price} tl</div>

      {addToCart && (
        <button className="btn" onClick={() => addToCart({ name, price })}>
          Sepete ekle
        </button>
      )}
      {removeToCart && (
        <div className="cart-remove">
          <span className="quantity"> {quantity}</span>
          <button
            className="btn delete"
            onClick={() => removeToCart({ name, price })}
          >
            Sepetten çıkar
          </button>
        </div>
      )}
    </div>
  );
}
