import React from 'react'
import Title from "../../components/layout/ui/Title";
import Input from "../../components/Input";
import { useFormik } from "formik";
import { passwordSchema } from "../../schema/password";
const Password = () => {
    const onSubmit = async (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
      };
    
      const formik = useFormik({
        initialValues: {
          password: "",
          passwordAgain: "",
        },
        onSubmit,
        validationSchema: passwordSchema,
      });
    
      console.log(formik.values);
      const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "New Password",
          value: formik.values.password,
          errorMessage: formik.errors.password,
          touched: formik.touched.password,
        },
        {
          id: 2,
          name: "passwordAgain",
          type: "password",
          placeholder: "New Password Again",
          value: formik.values.passwordAgain,
          errorMessage: formik.errors.passwordAgain,
          touched: formik.touched.passwordAgain,
        },
      ];
  return (
    <div className="mt-5 md:ml-2 w-3/4 mr-4 ml-[12.5%]">
    <Title addClass="text-4xl text-center md:text-left">
      Password
    </Title>
    <div>
      <form
        className="md:grid md:grid-cols-2 flex flex-col gap-4 mt-5"
        onSubmit={formik.handleSubmit}
      >
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={input.value}
            errorMessage={input.errorMessage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}

        <div className="col-span-1 flex justify-center md:justify-start ">
          <button type="submit" className="btn-primary mb-5 w-1/2">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Password