import { SHOW_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        alert: {
          variant: action.payload.variant,
          msg: action.payload.msg
        },
        isAvailable: true
      };
    case REMOVE_ALERT:
      return {
        alert: {
          variant: null,
          msg: null
        },
        isAvailable: false
      };
    default:
      return state;
  }
};
