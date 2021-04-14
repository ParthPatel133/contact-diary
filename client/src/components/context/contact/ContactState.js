import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "one",
        email: "one@gmail.com",
        type: "personal",
      },
      {
        id: 2,
        name: "two",
        email: "two@gmail.com",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  //delete contact
  //set current contact
  //clear current contact
  //update current contact
  //filter contact
  // clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
