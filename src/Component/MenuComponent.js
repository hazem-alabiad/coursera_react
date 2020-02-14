import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onSelectDish(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (!dish) {
      return <div></div>;
    }

    // if not null
    return (
      <Card key={dish.id}>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle heading>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 mt-5">
          <Card key={dish.id} onClick={() => {this.onSelectDish(dish)}}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle heading>{dish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 my-5">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
