/** @format */

import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Loading from "./LoadingComponent";

function RenderItem({ item, isLoading, errMess }) {
  if (isLoading) return <Loading />;
  else if (errMess) return <h4>{errMess}</h4>;
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md m-1">
          <RenderItem item={props.dish} isLoading={props.isLoading} errMess={props.errMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderItem item={props.leader} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderItem item={props.promotion} />
        </div>
      </div>
    </div>
  );
}
