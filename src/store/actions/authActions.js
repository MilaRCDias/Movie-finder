import * as types from "./actionTypes";

export const authUser=(user)=> {
  return (dispatch, getState, {getFirebase, getFirestore})=>{
    // async call database
// const firestore = getFirestore();
const firebase = getFirebase();
firebase.auth().signInWithEmailAndPassword(
  user.email,
  user.password
).then(()=>{
  dispatch({type: types.AUTH_SUCCESS})
}).catch((err)=>{
  dispatch({ type: types.AUTH_ERROR, err });
});

/* firestore.collection('users').add({
  ...user,

})
    dispatch({ type: types.AUTH_USER, user });
  }
  
 */
  }
};


  