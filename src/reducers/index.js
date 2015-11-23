import { combineReducers } from 'redux';

function helloWorld(state = 'Welcome', action = null) {
  switch (action.type) {
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  helloWorld
});

export default rootReducer;
