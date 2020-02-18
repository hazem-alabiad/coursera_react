import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderComments({ dish }) {
  // if no comments return empty `div`d
  if (!dish || !dish.comments) return <div></div>;
  // else, if there are comment(s)

  const commentElement = dish.comments.map(commentObject => {
    return (
      <li key={commentObject.id}>
        <p>{commentObject.comment}</p>
        <p>
          --
          {commentObject.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(new Date(Date.parse(commentObject.date)))}
        </p>
      </li>
    );
  });

  return (
    <React.Fragment>
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentElement}</ul>
    </React.Fragment>
  );
}

function RenderDish({ dish }) {
  // if no dishes selected return empty `div`
  if (!dish) return <div></div>;
  // else, if there is a dish selected
  const { id, name, image, description } = dish; // destructing
  return (
    <Card key={id}>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardTitle heading="true">{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
}

export const DishDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
};
