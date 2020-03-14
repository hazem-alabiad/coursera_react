/** @format */

import * as ActionTypes from "./ActionTypes";
export const Promotions = (
  state = {
    isLoading: true,
    errMess: null,
    promotions: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.PROMS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };
    case ActionTypes.PROMS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, promotions: [] };
    case ActionTypes.ADD_PROMS:
      return { ...state, isLoading: false, errMess: null, promotions: action.payload };
    default:
      return state;
  }
};
