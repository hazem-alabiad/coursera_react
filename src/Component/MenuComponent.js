/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

function RenderDishItem({props}) {
  if (props.isLoading) return <Loading />;
  if (props.errMess) return <h4>{props.errMess}</h4>;
  const menu = props.dishes.map(dish => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg src={baseUrl + dish.image} alt={dish.name} />
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
          <Link to="/menu" active="true">
            Menu
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>Menu</h3>
        <hr />
      </div>
      <div className="row">
        <RenderDishItem props={props.dishes} />
      </div>
    </div>
  );
};
