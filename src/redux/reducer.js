import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
  comments: COMMENTS,
  dishes: DISHES,
  leaders: LEADERS,
  promotions: PROMOTIONS
};

export const reducer = (state = initialState, action) => {
  return state;
};
