import React, { useEffect } from "react";
import { getContactsList } from "../../store/selectors";
import { setContactsList } from "../../store/Slices/contacts";
import { getAllContacts } from "../api/contacts";
import { useDispatch, useSelector } from "react-redux";

const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      console.log("wqeewq");
      const arr = await getAllContacts();
      console.log("arr :", arr);
      dispatch(setContactsList(arr));
    };
    fetchData();
  }, []);
  const contactsList = useSelector(getContactsList);
  return <div>ContactsList</div>;
};

export default ContactsList;
