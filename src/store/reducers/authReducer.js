import * as types from "../actions/actionTypes";

const initialState = {
 // token: null,
 // userId: null,

};

export const userReducer = (state = initialState, action) => {
         switch (action.type) {
           case types.CREATE_USER:
             return [...state, { ...action.user }];
           default:
             return state;
         }
       };

