import React from "react";
import Title from "../../../components/layout/ui/Title";
import Input from "../../../components/Input";
import { useFormik } from "formik";
import { registerSchema } from "../../../schema/register";
import Link from "next/link";

const Register = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
        fullName:"",
      email: "",
      password: "",
      confirmPassword:"",
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  const inputs = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Your fullname",
        value: formik.values.fullName,
        errorMessage: formik.errors.fullName,
        touched: formik.touched.fullName,
      },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
    {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm your password",
        value: formik.values.confirmPassword,
        errorMessage: formik.errors.confirmPassword,
        touched: formik.touched.confirmPassword,
      },
  ];
  return (
    <div className="container mx-auto">
      <form onSubmit={onSubmit}>
        <Title addClass="text-3xl mt-8 mb-6 text-center">Sign Up</Title>
        <div className="flex flex-col justify-center items-center my-4 sm:mx-auto md:w-1/3 sm:w-2/3 mx-5 gap-5">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={input.value}
              errorMessage={input.errorMessage}
              touched={input.touched}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
        </div>

        <button className="btn-primary w-1/3 ml-[33.3%] my-2">SIGN UP</button>
        <div className="mb-12">
          <Link className="flex justify-center" href="/auth/login">
            <span className="underline text-secondary">
              Do you have an account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
