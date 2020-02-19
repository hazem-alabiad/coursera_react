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
import { DishDetail } from "./DishDetailComponent";

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
    const HomPage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.designation)[0]}
          promotion={
            this.state.promotions.filter(promotion => promotion.featured)[0]
          }
        />
      );
    };

    const DishDetailPage = ({ match }) => {
      const matchedId = parseInt(match.params.dishId, 10);
      return (
        <DishDetail
          dish={this.state.dishes.filter(dish => dish.id === matchedId)[0]}
          comments={
            this.state.comments.filter(
              comment => comment.dishId === matchedId
            )
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomPage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishDetailPage} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
