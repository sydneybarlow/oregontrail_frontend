import { combineReducers } from "redux";

const userReducer = (state = "", action) => {
  return state;
};

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
