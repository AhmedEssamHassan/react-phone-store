import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import { ButtonContainer } from "../NavBar/NavBarStyled";
import { Link } from "react-router-dom";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          return modalOpen ? (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 p-5  text-center text-capitalize"
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">Price: ${price}</h5>
                    <Link to="/" onClick={closeModal}>
                      <ButtonContainer>store</ButtonContainer>
                    </Link>
                    <Link to="/cart" onClick={closeModal}>
                      <ButtonContainer cart>go to cart</ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          ) : null;
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
