import React from "react";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      image: null,
      fullname: "",
      email: "",
      github: "",
    },
    onSubmit: (values) => {
      console.log({ image: values.image, values });
    },
  });
  return (
    <div className="flex flex-col w-[40%] md:w-full items-center">
      <form>
        <div className="flex flex-col w-full">
          <label htmlFor="image">Upload Avatar</label>
          <input
          
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="full name">Full Name</label>
          <input
          className="bg-[#0c082bff] text-[#d2d1d6ff] "
            name="fullname"
            type="text"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email Address</label>
          <input
            className="bg-[#0c082bff]"
            placeholder="Example@gmail.com"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="github">GitHub Username</label>
          <input
          className="bg-[#0c082bff] self-center"
            placeholder="@yourusername"
            type="text"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button 
        className="bg-[#e16151ff] text-[#0c082bff]"
        type="submit">Generate My Ticket</button>
      </form>
    </div>
  );
};

export default Form;
