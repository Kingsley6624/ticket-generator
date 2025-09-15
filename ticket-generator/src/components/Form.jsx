import React, { useRef, useState, useEffect } from "react";
import upload from "../assets/images/icon-upload.svg";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import info from "../assets/images/icon-info.svg";

const Form = () => {
  const navigate = useNavigate();

  const MaxFileSize = 1024 * 1024;

  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleDrop = (e) => {
    e.preventDefualt();
  };
  const formik = useFormik({
    initialValues: {
      image: null,
      fullname: "",
      email: "",
      github: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log({ image: values.image, values });
      resetForm();
      navigate("/ticket", { state: { value: values } });
    },

    validationSchema: Yup.object({
      image: Yup.mixed()
        .required("avatar is required")
        .test(
          "fileSize",
          "file too large, please upload a photo under 1mb",
          (value) => {
            return;
            value && value <= MaxFileSize;
          }
        ),

      email: Yup.string()
        .required("email is required")
        .email("please enter a valid email"),
    }),
  });
  return (
    <div className="flex flex-col items-center w-full px-5">
      <form
        className="bg-transparent flex flex-col gap-3 w-full md:w-[40%]"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="image">Upload Avatar</label>
          <div
            tabIndex={0}
            onClick={handleClick}
            className="border border-dashed border-[#8784a4ff] rounded-md  flex flex-col justify-center items-center p-5 gap-3"
          >
            <input
              hidden
              ref={fileInputRef}
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                formik.setFieldValue("image", e.currentTarget.files[0]);
              }}
            />

            {formik.values.image ? (
              <div className="flex flex-col items-center gap-3">
                <img
                  className="w-16 h-16 rounded-lg border-2 border-[#8784a4ff]"
                  src={URL.createObjectURL(formik.values.image)}
                  alt=""
                />
                <div className="flex justify-center items-center gap-3 text-[#d2d1d6ff]">
                  <button className="bg-[#4b486aff] rounded-md py-1 px-2">
                    Remove image
                  </button>
                  <button className="bg-[#4b486aff] rounded-md py-1 px-2">
                    change image
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <div className="w-fit rounded-md p-1 bg-[#4b486aff]/50 relative z-20">
                  <img className="z-0" src={upload} alt="" />
                </div>

                <p>drag and drop or click to upload</p>
              </div>
            )}
          </div>
          {formik.errors.image && formik.touched.image && (
            <div className="text-red-400 text-sm">
              <img src={info} alt="" />
              {formik.errors.image}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="full name">Full Name</label>
          <input
            className="bg-transparent text-[#d2d1d6ff] border border-[#8784a4ff] p-3 rounded-md"
            name="fullname"
            type="text"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            className="bg-transparent border border-[#8784a4ff] p-3 rounded-md"
            placeholder="Example@gmail.com"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-400 text-sm flex items-center gap-1">
              <img className="text-red-400" src={info} alt="" />
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="github">GitHub Username</label>
          <input
            className="bg-transparent border border-[#8784a4ff] p-3 rounded-md"
            placeholder="@yourusername"
            type="text"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button
          className="bg-[#e16151ff] text-[#0c082bff] rounded-md p-3 w-full mt-5"
          type="submit"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
