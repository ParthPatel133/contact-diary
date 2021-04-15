import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filteredContacts, clearFilter, filtered } = contactContext;

  const text = useRef();

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const handleChange = (e) => {
    if (text.current.value !== "") {
      filteredContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        onChange={handleChange}
        placeholder="Filter Contacts"
      />
    </form>
  );
};

export default ContactFilter;
