/* import * as types from "./actionTypes";

export const addMovie = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call database
    const firestore = getFirestore();
    
    firestore.collection("users").add({
      ...user,
    });
    dispatch({ type: types.AUTH_USER, user });
  };
};
 */