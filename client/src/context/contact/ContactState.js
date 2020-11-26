import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Amjad Sam",
        email: "amjad@live.com",
        phone: "012-345-678",
        type: "personal",
      },
      {
        id: 2,
        name: "Walaa Dab",
        email: "Walaa@live.com",
        phone: "012-345-123",
        type: "personal",
      },
      {
        id: 3,
        name: "Hamza Ab",
        email: "hamza@live.com",
        phone: "012-345-456",
        type: "pro",
      },
      {
        id: 4,
        name: "Tarek naj",
        email: "tarek@live.com",
        phone: "012-345-789",
        type: "pro",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
