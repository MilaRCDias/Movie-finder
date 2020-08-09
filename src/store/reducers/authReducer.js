import * as types from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  email: null,
  authError:null,
};

const userReducer = (state = initialState, action) => {
    console.log('reducer', action.type, action)
         switch (action.type) {
           case types.AUTH_ERROR:
             return {...state, authError: 'Login Fail'}; 
           case types.AUTH_SUCCESS:
          return{...state,authError: null }
            
           case types.AUTH_USER:
             return [...state, { ...action.user }];
           default:
             return state;
         }
       };

export default userReducer;