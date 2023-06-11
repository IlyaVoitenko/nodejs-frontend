import React from "react";
import style from "./style.module.css";
import ContactTitle from "./ContactTitle";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className={style.container}>
      <ContactTitle />
      <Form />
    </div>
  );
};

export default ContactForm;
