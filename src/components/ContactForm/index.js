import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ContactTitle from "./ContactTitle";
import { useDispatch, useSelector } from "react-redux";
import { regexForm } from "./helpers";
import { initialArrayContacts } from "../../store/Slices/contacts";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.arrayContacts);
  const onSubmitEvent = (data, event) => {
    event.preventDefault();
    console.log(data);
    dispatch(initialArrayContacts([1, 2, 3, 4, 5]));
  };

  useEffect(() => {
    console.log("contacts:", contacts);
  }, [contacts]);

  const dispatch = useDispatch();
  const { nameRegex, patternRegex, phoneRegex } = regexForm;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const { name, email, phone } = errors;

  return (
    <div>
      <ContactTitle />
      <form onSubmit={handleSubmit(onSubmitEvent)}>
        <input
          className={name && "errorField"}
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 10,
            pattern: nameRegex,
          })}
          placeholder="name"
          name="name"
        />
        <input
          className={email && "errorField"}
          {...register("email", { pattern: patternRegex })}
          placeholder="Email"
          name="email"
        />
        <input
          className={phone && "errorField"}
          {...register("phone", {
            required: true,
            pattern: phoneRegex,
          })}
          placeholder="phone"
          name="phone"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
