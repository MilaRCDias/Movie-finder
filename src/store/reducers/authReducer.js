import * as types from "../actions/actionTypes";

const initialState = {
  userId: null,
  email: null,
  authError: null,
};

const userReducer = (state = initialState, action) => {
  console.log("reducer", action.type, action);
  switch (action.type) {
    case types.AUTH_ERROR:
      return { ...state, authError: "Login Fail" };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        authError: null,
        userId: action.uid,
        email: action.email,
      };

    case types.AUTH_USER:
      return { ...action.user };

    case types.SIGNOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default userReducer;
