import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Col,
  Button,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";

// validation functions
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Contact extends Component {
  constructor(props) {
    super(props);

    // binding
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    // * debugging issues
    console.log("Current state is:\n" + JSON.stringify(values));
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 mb-4">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col>
                  <Control.text
                    className="form-control"
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    messages={{
                      required: <div>Required</div>,
                      minLength: <div>Must be greater than 2 characters</div>,
                      maxLength: <div>Must be 15 characters or less</div>
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col>
                  <Control.text
                    className="form-control"
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    messages={{
                      required: <div>Required</div>,
                      minLength: <div>Must be greater than 2 characters</div>,
                      maxLength: <div>Must be 15 characters or less</div>
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telNum" md={2}>
                  Contact Tel.
                </Label>
                <Col>
                  <Control.text
                    className="form-control"
                    model=".telNum"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. number"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telNum"
                    show="touched"
                    messages={{
                      required: <div>Required</div>,
                      minLength: <div>Must be greater than 2 characters</div>,
                      maxLength: <div>Must be 15 characters or less</div>,
                      isNumber: <div>Must be a number</div>
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col>
                  <Control.text
                    className="form-control"
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators={{
                      required,
                      validEmail
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid Email Address"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col>
                  <Control.textarea
                    className="form-control"
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                  ></Control.textarea>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ offset: 2, size: 10 }} className="mt-3">
                  <Button type="submit" color="primary">
                    Send your Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}
