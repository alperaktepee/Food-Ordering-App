import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullname: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .min(10, "Phone number must be at least 10 characters."),
  email: Yup.string()
    .required("E-mail is required.")
    .email("E-mail is invalid."),
  people: Yup.number()
    .required("People field is required.")
    .max(10, " It must be max 10 people."),
  date: Yup.date().required("Date is required")
});

