import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onSelectDish(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onSelectDish(dishId)}
        />
        <DishDetail
          dish={this.state.dishes.filter(
            dish => dish.id === this.state.selectedDish
          )[0]}
        />
      </div>
    );
  }
}
