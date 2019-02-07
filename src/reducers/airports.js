import { RECEIVE_AIRPORTS } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_AIRPORTS:
      // console.log(action.payload) ;
      return action.payload;
    default:
      return state;
  }
}
