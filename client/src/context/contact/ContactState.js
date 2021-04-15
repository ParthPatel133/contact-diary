import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  CLEAR_CONTACTS,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  SET_CURRENT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "one",
        email: "one@gmail.com",
        type: "personal",
        phone: "206 5205 165",
      },
      {
        id: 2,
        name: "two",
        email: "two@gmail.com",
        type: "professional",
        phone: "562 5965 265",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update current contact
  //filter contact
  // clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
