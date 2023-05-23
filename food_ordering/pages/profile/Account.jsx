import React from 'react'
import Title from "../../components/layout/ui/Title";
import Input from "../../components/Input";
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profile";
const Account = () => {
    const onSubmit = async (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
      };
    
      const formik = useFormik({
        initialValues: {
          fullname: "",
          phoneNumber: "",
          email: "",
          address: "",
          job: "",
          bio: "",
        },
        onSubmit,
        validationSchema: profileSchema,
      });
    
      console.log(formik.values);
      const inputs = [
        {
          id: 1,
          name: "fullname",
          type: "text",
          placeholder: "Your fullname",
          value: formik.values.fullname,
          errorMessage: formik.errors.fullname,
          touched: formik.touched.fullname,
        },
        {
          id: 2,
          name: "phoneNumber",
          type: "number",
          placeholder: "Your phone number",
          value: formik.values.phoneNumber,
          errorMessage: formik.errors.phoneNumber,
          touched: formik.touched.phoneNumber,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your e-mail address",
          value: formik.values.email,
          errorMessage: formik.errors.email,
          touched: formik.touched.email,
        },
        {
          id: 4,
          name: "address",
          type: "text",
          placeholder: "Your address",
          value: formik.values.address,
          errorMessage: formik.errors.address,
          touched: formik.touched.address,
        },
        {
          id: 5,
          name: "job",
          type: "text",
          placeholder: "Your job",
          value: formik.values.job,
          errorMessage: formik.errors.job,
          touched: formik.touched.job,
        },
        {
          id: 6,
          name: "bio",
          type: "text",
          placeholder: "Your bio",
          value: formik.values.bio,
          errorMessage: formik.errors.bio,
          touched: formik.touched.bio,
        },
      ];
  return (
    <div className="mt-5 md:ml-2 w-3/4 mr-4 ml-[12.5%]">
    <Title addClass="text-4xl text-center md:text-left">
      Account Settings
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

        <div className="col-span-2 flex justify-center md:justify-start ">
          <button type="submit" className="btn-primary mb-5 md:w-1/3 w-1/2">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Account