import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

function RenderDishItem({ dishes, onClick }) {
  const menu = dishes.map(dish => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card
          onClick={() => {
            onClick(dish.id);
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

  return menu;
}

export const Menu = props => {
  return (
    <div className="container">
      <div className="row">
        <RenderDishItem dishes={props.dishes} onClick={props.onClick} />
      </div>
    </div>
  );
};
