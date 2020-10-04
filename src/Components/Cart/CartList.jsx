import React from "react";
import CartItem from "./CartItem";
import artItem from "./CartItem";
const CartList = (props) => {
  const { val } = props;
  const { cart } = val;

  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} val={val} />;
      })}
    </div>
  );
};

export default CartList;