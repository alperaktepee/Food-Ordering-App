import React from "react";
import Input from "../../components/Input";
import Title from "../../components/layout/ui/Title";
import { useFormik } from "formik";
import { adminSchema } from "../../schema/admin";

import Link from "next/link";

const Admin = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your username",
      value: formik.values.username,
      errorMessage: formik.errors.username,
      touched: formik.touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched: formik.touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <form onSubmit={onSubmit}>
        <Title addClass="text-3xl mt-8 mb-6 text-center">Admin Login</Title>
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

        <button className="btn-primary w-1/3 ml-[33.3%] my-2">LOGIN</button>
   
        <div className="mb-12">
          <Link className="flex justify-center" href="/">
            <span className="underline text-secondary">
              Home Page
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Admin;
