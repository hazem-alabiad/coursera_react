import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onSelectDish(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card
            key={dish.id}
            onClick={() => {
              this.onSelectDish(dish);
            }}
          >
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle heading="true">{dish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}
