import * as types from "./actionTypes";

export const authUser=(email, password)=> {
  return { type: types.AUTH_USER, email, password };
}

