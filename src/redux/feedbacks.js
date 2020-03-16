/** @format */

import * as ActionTypes from "./ActionTypes";
export const feedbacks = (
  state = {
    errMess: null,
    feedbacks: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FEEDBACK_FAILED:
      return { ...state, errMess: action.payload, feedbacks: [] };
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, errMess: null, feedbacks: state.feedbacks.concat(feedback) };
    default:
      return state;
  }
};
