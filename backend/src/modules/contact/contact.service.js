import Contact from "./contact.model.js";
const createContact = async (contactData) => {
  const contact = await Contact.create(contactData);
  return contact;
};

const getContactService = async () => {
  const contact = await Contact.find().sort({
    createdAt: -1,
  });
  return contact;
};

export { createContact, getContactService };
