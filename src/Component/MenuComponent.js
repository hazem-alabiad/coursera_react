import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

export default class Menu extends Component {
  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card
            key={dish.id}
            onClick={() => {
              this.props.onClick(dish.id);
            }}
          >
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle heading="true">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}
