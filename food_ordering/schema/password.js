import * as Yup from "yup";

export const passwordSchema = Yup.object({

  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password is too short - should be minimum 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    passwordAgain: Yup.string()
    .required("Confirm password is required.")
    .min(8, "Password is too short - should be minimum 8 characters.")
    .oneOf([Yup.ref("password"),null],"Password must match.")
});
