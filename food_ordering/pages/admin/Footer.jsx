import React, { useState } from "react";
import Title from "../../components/layout/ui/Title";
import Input from "../../components/Input";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  const [linkAdd, setLinkAdd] = useState("https://");
  const [iconName, setIconName] = useState("fab fa-");
  const [icons, setIcons] = useState([
    "fab fa-facebook",
    "fab fa-twitter",
    "fab fa-instagram",
  ]);
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      location: "",
      phoneNumber: "",
      email: "",
      desc: "",
      day: "",
      time: "",
    },
    onSubmit,
    validationSchema: footerSchema,
  });

  console.log(formik.values);
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: formik.values.location,
      errorMessage: formik.errors.location,
      touched: formik.touched.location,
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
      name: "desc",
      type: "text",
      placeholder: "Update the description",
      value: formik.values.desc,
      errorMessage: formik.errors.desc,
      touched: formik.touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update the day",
      value: formik.values.day,
      errorMessage: formik.errors.day,
      touched: formik.touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update the time",
      value: formik.values.time,
      errorMessage: formik.errors.time,
      touched: formik.touched.time,
    },
  ];
  return (
    <div className="mt-5 md:ml-2 w-3/4 mr-4 ml-[12.5%]">
      <Title addClass="text-4xl text-center md:text-left">
        Footer
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
      <div>
        <div className="flex md:flex-row flex-col gap-2 mb-5 items-center">
          <Input
            placeholder="Link address"
            value={linkAdd}
            onChange={(e) => {
              setLinkAdd(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Icon name"
            value={iconName}
            onChange={(e) => {
              setIconName(e.target.value);
            }}
          ></Input>
          <button className="btn-primary h-10 md:w-30 w-40"  onClick={() => {
              setIcons([...icons, iconName]);
              setIconName("fab fa-");
            }}>Add</button>
        </div>
      </div>
      <div>
      <ul className="flex items-center gap-6 justify-center mt-10 mb-10">
          {icons.map((icon, index) => (
            <li key={index} className="flex items-center">
              <i className={`${icon} text-2xl`}></i>
              <button
                className="text-danger"
                onClick={() => {
                  setIcons((prev) => prev.filter((item, i) => i !== index));
                }}
                type="button"
              >
                <i className="fa fa-trash text-xl ml-2 text-red-500"></i>
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
export default Footer;
