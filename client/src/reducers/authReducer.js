import { FETCH_USER } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null, action) {
  console.log(action);
  switch(action.type) {
    case FETCH_USER: 
      return action.payload || false; //return the user data or return false if the payload is empty (that would mean user is not logged in)
    default:
      return state;
  }
}