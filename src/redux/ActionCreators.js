/** @format */

import { baseUrl } from "../shared/baseUrl";
import * as ActionTypes from "./ActionTypes";

// * dishes
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
    .then(
      // if promise resolved
      response => {
        if (response.ok) return response;
        else {
          var error = new Error("Error: " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
      // if promise rejected
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

// * comments
export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, author, rating, comment) => dispatch => {
  const newComment = {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment
  };
  newComment.date = new Date().toISOString();

  // now, send POST request to DB through Fetch API
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      // if  promise resolved
      response => {
        if (response.ok) return response;
        else {
          var error = new Error("Error: " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
      // if promise rejected
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

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
    .then(
      // if promise resolved
      response => {
        if (response.ok) return response;
        else {
          var error = new Error("Error: " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
      // if promise rejected
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

// * promotions
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
    .then(
      response => {
        // if promise resolved
        if (response.ok) {
          return response;
        } else {
          var error = new Error("Error: " + response.status + ": " + response.statusText);
          error.response = response;
          throw error;
        }
      },
      // if promise rejected
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(proms => dispatch(addProms(proms)))
    .catch(error => dispatch(promsFailed(error.message)));
};
