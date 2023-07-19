import DeleteBtn from "../DeleteBtn/DeleteBtn";
import { AllContactsContext } from "../../../context/Context";
import { useContext, useEffect } from "react";
import axios from "axios";
const ContactItem = () => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);

  return (
    <>
      {allContacts?.map((contact) => (
        <div className="contact-item" key={contact._id}>
          <p>{contact._id}</p>
          <p>{contact.name}</p>
          <p>{contact.telefone}</p>
          <p>{contact.street}</p>
          <DeleteBtn id={contact._id} />
        </div>
      ))}
    </>
  );
};

export default ContactItem;
