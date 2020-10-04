import React, { Component } from "react";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../Context";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <Title name="your" title=" cart" />
        <ProductConsumer>
          {(val) => {
            const { cart } = val;
            return cart.length > 0 ? (
              <React.Fragment>
                <CartColumns />
                <CartList val={val} />
                <CartTotals val={val} />
              </React.Fragment>
            ) : (
              <EmptyCart />
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
