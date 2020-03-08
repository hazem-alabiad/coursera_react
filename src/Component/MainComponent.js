/** @format */

import React, { Component } from "react";
import { Menu } from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { DishDetail } from "./DishDetailComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    comments: state.comments,
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, author, rating, comment) =>
    dispatch(addComment(dishId, author, rating, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  }
});

export class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomPage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.designation)[0]}
          promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
        />
      );
    };

    const DishDetailPage = ({ match }) => {
      const matchedId = parseInt(match.params.dishId, 10);
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter(dish => dish.id === matchedId)[0]}
          comments={this.props.comments.filter(comment => comment.dishId === matchedId)}
          addComment={this.props.addComment}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
        />
      );
    };

    const AboutUsPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    const MenuPage = () => {
      return <Menu dishes={this.props.dishes} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomPage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route path="/menu/:dishId" component={DishDetailPage} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
