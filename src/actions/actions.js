import {
  REQUEST_AIRPORTS,
  RECEIVE_AIRPORTS,
  CHOOSE_AIRPORTS,
  REQUEST_TICKETS,
  RECEIVE_TICKETS
} from "../constants";

import axios from "axios";

export const fetchAirports = (origin, destination) => {
  return dispatch => {
    dispatch({ type: REQUEST_AIRPORTS });
    axios
      .get(
        "https://raw.githubusercontent.com/pro-react/sample-code/master/chapter%206%20(Redux)/aircheap/public/airports.json"
      )
      .then(res => dispatch({ type: RECEIVE_AIRPORTS, payload: res.data }))
      .catch(err => dispatch({ type: RECEIVE_AIRPORTS, payload: "Error" }));
  };
};

export const chooseAirport = (target, airport) => ({
  type: CHOOSE_AIRPORTS,
  payload: { target: target, code: airport ? airport.value : "" }
});
