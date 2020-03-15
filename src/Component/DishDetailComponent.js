/** @format */

import React, { Component } from "react";
import { Fade, FadeTransform, Stagger } from "react-animation-components";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

function RenderComments({ comments, postComment, dishId }) {
  // if no comments return empty `div`
  if (!comments) return <div></div>;
  // else, if there are comment(s)

  const commentElement = (
    <Stagger in>
      {comments.map(commentObject => {
        return (
          <Fade in>
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
          </Fade>
        );
      })}
    </Stagger>
  );

  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentElement}</ul>
      <CommentForm postComment={postComment} dishId={dishId} />
    </div>
  );
}

function RenderDish({ dish }) {
  // if no dishes selected return empty `div`
  if (!dish) return <div></div>;
  // else, if there is a dish selected
  const { id, name, image, description } = dish; // destructing
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(1) translateY(-50%)"
      }}
    >
      <Card key={id}>
        <CardImg src={baseUrl + image} alt={name} />
        <CardBody>
          <CardTitle heading="true">{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleSubmit = values => {
    this.props.postComment(this.props.dishId, values.author, values.rating, values.message);
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    // validation functions
    const minLength = len => val => val && val.length >= len;
    const maxLength = len => val => !val || val.length <= len;

    return (
      <div>
        <Button outline onClick={this.toggle}>
          <span className="fa fa-pencil"> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row>
                <Col className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    id="rating"
                    name="rating"
                    model=".rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row>
                <Col className="form-group">
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text
                    id="author"
                    name="author"
                    model=".author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    show="touched"
                    model=".author"
                    messages={{
                      minLength: <div>Must be greater than 2 characters</div>,
                      maxLength: <div>Must be 15 characters or less</div>
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="form-group">
                  <Label htmlFor="message">Comment</Label>
                  <Control.textarea
                    id="message"
                    name="message"
                    model=".message"
                    className="form-control"
                    rows="6"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="form-group">
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export const DishDetail = props => {
  if (props.dishIsLoading)
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );

  if (props.dishErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishErrMess}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12"></div>
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    </div>
  );
};
