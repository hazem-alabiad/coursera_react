import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { Menu } from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: COMMENTS,
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <Home
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                leader={
                  this.state.leaders.filter(leader => leader.designation)[0]
                }
                promotion={
                  this.state.promotions.filter(
                    promotion => promotion.featured
                  )[0]
                }
              />
            )}
          />
          <Route
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
