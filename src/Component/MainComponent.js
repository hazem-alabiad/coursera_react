/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fetchComments, fetchDishes, fetchProms, postComment } from "../redux/ActionCreators";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { DishDetail } from "./DishDetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Menu } from "./MenuComponent";

const mapStateToProps = state => {
  return {
    comments: state.comments,
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions
  };
};

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, author, rating, comment) =>
    dispatch(postComment(dishId, author, rating, comment)),
  resetFeedbackForm: () => dispatch(actions.reset("feedback")),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchProms: () => dispatch(fetchProms())
});

export class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchProms();
  }

  render() {
    const HomPage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishIsLoading={this.props.dishes.isLoading}
          DishErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
          promoIsLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter(leader => leader.designation)[0]}
        />
      );
    };

    const DishDetailPage = ({ match }) => {
      const matchedId = parseInt(match.params.dishId, 10);
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter(dish => dish.id === matchedId)[0]}
          dishIsLoading={this.props.dishes.isLoading}
          DishErrMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(comment => comment.dishId === matchedId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    const AboutUsPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    const MenuPage = () => {
      return <Menu dishes={this.props.dishes} />;
    };

    const ContactPage = () => {
      return <Contact resetFeedbackForm={this.props.resetFeedbackForm} />;
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomPage} />
              <Route path="/aboutus" component={AboutUsPage} />
              <Route exact path="/menu" component={MenuPage} />
              <Route path="/menu/:dishId" component={DishDetailPage} />
              <Route path="/contactus" component={ContactPage} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
