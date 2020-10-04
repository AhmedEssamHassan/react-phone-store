import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }

  .card-footer {
    transition: all 0.3s linear;
    background: transparent;
    border-top: transparent;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .card-img-top {
    transition: all 0.3s linear;
  }

  .img-container {
    position: relative;
    overflow: hidden;
    &:hover .card-img-top {
      transform: scale(1.2);
    }
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: transform 0.3s linear;
    &:hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
  }

  .img-container: hover .cart-btn {
    transform: translate(0%, 0%);
  }
`;
