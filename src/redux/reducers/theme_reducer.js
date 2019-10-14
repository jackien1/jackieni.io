import * as types from "../types";

const INITIAL_STATE = {
  batmode: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_BATMODE:
      return { ...state, batmode: action.payload };

    default:
      return state;
  }
}
