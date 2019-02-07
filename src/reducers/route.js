import { CHOOSE_AIRPORTS } from "../constants";
import update from "react-addons-update";

const initialState = {
  origin: "",
  destination: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_AIRPORTS:
      return update(state, {
        [action.payload.target]: { $set: action.payload.code }
      });
    default:
      return state;
  }
}
