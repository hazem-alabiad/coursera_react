import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDishItem({ dishes }) {
  const menu = dishes.map(dish => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle heading="true">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  return menu;
}

export const Menu = props => {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/menu" active="true">Menu</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>Menu</h3>
        <hr />
      </div>
      <div className="row">
        <RenderDishItem dishes={props.dishes} />
      </div>
    </div>
  );
};
