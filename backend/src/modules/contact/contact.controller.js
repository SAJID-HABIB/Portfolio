import contactSchema from "./contact.validation.js";
import {createContact, getContactService} from "./contact.service.js";
import { sendContactEmail } from "../../services/email.service.js";

const createContactController = async (req, res) => {
  try {
    const contactData = req.body;
    const { error } = contactSchema.validate(contactData);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    const contact = await createContact(contactData);
    await sendContactEmail(contactData);
    return res.status(201).json({
      success: true,
      message: "Contact message sent successfully.",
      data: contact,
    });
  } catch (error) {
     console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

const getContactController = async (req, res) => {
  try {
    const contacts = await getContactService();

    return res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully.",
      data: contacts
    })
  } catch (error) {
      console.error("Get contacts error:", error);
    return res.status(500).json({
     success: false,
     message: "Something went wrong. Please try again later.",
    })
  };
}
 
export  {
  createContactController,
   getContactController
  };
