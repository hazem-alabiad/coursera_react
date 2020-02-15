import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formatDate(date){
    var re = new RegExp("-", "g")
    const dateString = date.split("T")[0]
    return dateString.replace(re, ",")
  }

  renderComments(comments) {
    // if no comments return empty `div`
    if (!comments) return <div></div>;
    // else, if there are comment(s)
    const commentElement = comments.map(commentObject => {
      return (
        <li>
          <p>{commentObject.comment}</p>
          <p>
            {"-- "} 
            {commentObject.author} {this.formatDate(commentObject.date)}
          </p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentElement}</ul>
      </div>
    );
  }

  renderDish(dish) {
    // if no dishes selected return empty `div`
    if (!dish) return <div></div>;
    // else, if there is a dish selected
    const { id, name, image, description, comments } = dish; // destructing
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card key={id}>
            <CardImg src={image} alt={name} />
            <CardBody>
              <CardTitle heading="true">{name}</CardTitle>
              <CardText>{description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(comments)}
        </div>
      </div>
    );
  }

  render() {
    return this.renderDish(this.props.dish);
  }
}
