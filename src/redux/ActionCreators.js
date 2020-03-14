/** @format */

import { baseUrl } from "../shared/baseUrl";
import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId, author, rating, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment
  }
});

// dishes
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
  dispatch(dishesLoading());
  return fetch(baseUrl + "dishes")
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
};

// comments
export const commentsFailed = errMess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + "comments")
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

// promotions
export const promsLoading = () => ({
  type: ActionTypes.PROMS_LOADING
});

export const promsFailed = errMess => ({
  type: ActionTypes.PROMS_FAILED,
  payload: errMess
});

export const addProms = proms => ({
  type: ActionTypes.ADD_PROMS,
  payload: proms
});

export const fetchProms = () => dispatch => {
  dispatch(promsLoading());
  return fetch(baseUrl + "promotions")
    .then(response => response.json())
    .then(proms => dispatch(addProms(proms)));
};
