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

  export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((resp) => {
          return firestore
            .collection("users")
            .doc(resp.user.uid)
            .set({
              email: newUser.email,
              password: newUser.password,
             
            });
        })
        .then(() => {
          dispatch({ type: types.SIGNUP_SUCCESS });
        })
        .catch((err) => {
          dispatch({ type: types.SIGNUP_ERROR, err });
        });
    };
  };