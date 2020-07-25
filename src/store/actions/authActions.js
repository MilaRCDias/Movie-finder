import * as types from "./actionTypes";

export const authUser=(user)=> {
  return { type: types.AUTH_USER, user };
}

