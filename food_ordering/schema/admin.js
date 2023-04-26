import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string()
    .required("Username is required.")
    .min(3,"Username must be at least 3 characters."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password is too short - should be minimum 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
