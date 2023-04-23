import React from "react";
import Title from "../../../components/layout/ui/Title";
import Input from "../../../components/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../../schema/login";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Login = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Your email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
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
        <Title addClass="text-3xl mt-8 mb-6 text-center">Login</Title>
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
        <button className="btn-primary !bg-secondary text-white w-1/3 ml-[33.3%] my-2">
          <div className="flex items-center justify-center ">
            <span className="mx-2">
              <AiOutlineGithub />
            </span>
            <span>GITHUB</span>
          </div>
        </button>
        <div className="mb-12">
          <Link className=" w-1/3 ml-[33.3%]" href="/auth/register">
            <span className="underline text-secondary">
              Don't have an account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
