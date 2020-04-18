import {ADD_PHONE, ADD_CODE, ADD_NAME, ADD_CONTACTS, ADD_NOTIFICATION, ADD_KNOWS, ADD_PHOTO } from "../constants/action-types";

const initialState = {
  knows:[],
  phone:"",
  photo:"",
  name:"",
  code:"",
  notifications:false,
  contacts:false
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CODE) {
    return Object.assign({}, state, {
      code: action.payload
    });
  }
  if (action.type === ADD_NAME) {
    return Object.assign({}, state, {
      name: action.payload
    });
  }
  if (action.type === ADD_CONTACTS) {
    return Object.assign({}, state, {
      contacts: action.payload
    });
  }
  if (action.type === ADD_NOTIFICATION) {
    return Object.assign({}, state, {
      notifications: action.payload
    });
  }
  if (action.type === ADD_KNOWS) {
    return Object.assign({}, state, {
      knows: action.payload
    });
  }
  if (action.type === ADD_PHOTO) {
    return Object.assign({}, state, {
      photo: action.payload
    });
  }
  if (action.type === ADD_PHONE) {
    return Object.assign({}, state, {
      phone: action.payload
    });
  }
  return state;
}

export default rootReducer;