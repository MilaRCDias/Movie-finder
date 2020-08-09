import * as types from "./actionTypes";

export const authUser=(user)=> {
  return (dispatch, getState, {getFirebase})=>{
  
const firebase = getFirebase();
firebase.auth().signInWithEmailAndPassword(
  user.email,
  user.password
).then(()=>{
  dispatch({type: types.AUTH_SUCCESS})
}).catch((err)=>{
  dispatch({ type: types.AUTH_ERROR, err });
});


  }
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: types.SIGNOUT_SUCCESS });
      });
  };
};

  