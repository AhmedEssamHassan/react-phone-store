import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";
import Details from "./Components/Details/Details";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default/Default";
import Modal from "./Components/Modal/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
