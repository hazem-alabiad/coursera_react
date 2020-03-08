/** @format */

import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, author, rating, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment
  }
});

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errMess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));
  setTimeout(() => dispatch(addDishes(DISHES)), 2000);
};
