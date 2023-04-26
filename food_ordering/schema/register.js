import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullname: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  email: Yup.string()
    .required("E-mail is required.")
    .email("E-mail is invalid."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password is too short - should be minimum 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password"), null], "Password must match."),
});
