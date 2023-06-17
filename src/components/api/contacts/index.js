import instance from "../user";

export const getAllContacts = async () => {
  await instance.get("/contacts");
};

export const deleteContact = (id) => {
  return instance.delete(`/contacts/${id}`);
};

export const addContact = (data) => {
  return instance.post("/contacts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
