import React from "react";
import Input from "../../Input";
import Title from "../ui/Title";
import { useFormik } from 'formik'
import { reservationSchema } from "../../../schema/reservation";



const Reservation = () => {


  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      phoneNumber: '',
      email: '',
      people: '',
      date: '',
    },
    onSubmit,
    validationSchema:reservationSchema,

    
  });

  console.log(formik.values)
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Your fullname",
      value:formik.values.fullname,
      errorMessage:formik.errors.fullname,
      touched:formik.touched.fullname,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your phone number",
      value:formik.values.phoneNumber,
      errorMessage:formik.errors.phoneNumber,
      touched:formik.touched.phoneNumber,


    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your e-mail address",
      value:formik.values.email,
      errorMessage:formik.errors.email,
      touched:formik.touched.email,


    },    {
      id: 4,
      name: "people",
      type: "number",
      placeholder: "How many people ?",
      value:formik.values.people,
      errorMessage:formik.errors.people,
      touched:formik.touched.people,



    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value:formik.values.date,
      errorMessage:formik.errors.date,
      touched:formik.touched.date,


    },
  ];
  return (
    <div className=" sm:mx-12 py-12">
      <div>
        <Title addClass={"text-4xl mb-10 lg:text-start lg:mx-24 text-center"}>
          Book A Table
        </Title>
      </div>
      <div className="flex justify-between flex-wrap lg:flex-nowrap ">
        <form className="lg:flex-1 w-full flex flex-col items-center justify-start lg:ml-24 l mx-5 gap-y-3" onSubmit={formik.handleSubmit}>
          {inputs.map((input) => (
              <Input key={input.id} {...input} value={input.value} errorMessage={input.errorMessage} onChange={formik.handleChange} onBlur={formik.handleBlur} />  
         ))}

          <button type="submit" className="btn-primary mt-5 mb-5">BOOK NOW</button>
        </form>

        <div className="flex lg:flex-1 justify-center w-full lg:mr-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.3290248124322!2d-74.01012888875584!3d40.71323161747501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19205390e5%3A0xbf0d0a650cf696d8!2sSalad%20Box!5e0!3m2!1str!2str!4v1678536964471!5m2!1str!2str"
            width="600"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
