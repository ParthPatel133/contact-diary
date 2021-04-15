import React, { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { v4 as uuid } from "uuid";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set alert
  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
