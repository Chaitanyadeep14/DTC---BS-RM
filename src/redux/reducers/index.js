// src/redux/reducers/index.js
import { combineReducers } from 'redux';

// Example reducer for user authentication
const authReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
