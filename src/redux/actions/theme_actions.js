import * as types from "../types";

export const changeBatmode = status => {
  return {
    type: types.CHANGE_BATMODE,
    payload: status
  };
};
