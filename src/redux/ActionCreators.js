/** @format */

import { baseUrl } from "../shared/baseUrl";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";
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
  // only for demo, as json-server runs locally only
  // return fetch(baseUrl + "dishes")
  //   .then(response => response.json())
  //   .then(dishes => dispatch(addDishes(dishes)));
  setTimeout(dispatch(addDishes(DISHES)), 2000);
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
  // only for demo, as json-server runs locally only
  // return fetch(baseUrl + "comments")
  //   .then(response => response.json())
  //   .then(comments => dispatch(addComments(comments)));
  setTimeout(dispatch(addComments(COMMENTS)), 2000);
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
  // only for demo, as json-server runs locally only
  return fetch(baseUrl + "promotions")
    .then(response => {
      // if promise returns value
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error: " + response.status + ": " + response.statusText);
        error.response = response
        throw error
      }
    }, error => {
      var errMess = new Error(error.message)
      throw errMess
    })
    .then(response => response.json())
    .then(proms => dispatch(addProms(proms)))
    .catch(error => dispatch(promsFailed(error.message)))

  // setTimeout(dispatch(addProms(PROMOTIONS)), 2000);
};
