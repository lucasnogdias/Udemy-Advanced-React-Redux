import { CHANGE_AUTH } from "actions/types";

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}