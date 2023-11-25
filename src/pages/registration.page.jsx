import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().max(5).required("First Name is required"),
  lastName: Yup.string().max(5).required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone Number is required"),
  username: Yup.string().required("Username is required"),
  acceptedTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      acceptedTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-3/4 md:w-2/5 p-3">
        <p className="text-3xl font-bold my-5">Registration Form</p>
        <form onSubmit={formik.handleSubmit} className="">
          <div className="py-2 ">
            <label htmlFor="firstName" className="text-base font-medium">
              First Name
            </label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="my-2 w-3/4 bg-gray-200 p-1.5 rounded-md"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="lastName" className="text-base font-medium">
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="my-2 w-3/4 bg-gray-200 p-1.5 rounded-md"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="my-2 w-3/4 bg-gray-200 p-1.5 rounded-md"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone" className="text-base font-medium">
              Phone Number
            </label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="my-2 w-3/4 bg-gray-200 p-1.5 rounded-md"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="username" className="text-base font-medium">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="my-2 w-3/4 bg-gray-200 p-1.5 rounded-md"
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                id="acceptedTerms"
                name="acceptedTerms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.acceptedTerms}
                className="appearance-none h-4 w-4 mr-2 bg-gray-200 rounded-sm"
              />
              {formik.values.acceptedTerms && (
                <span
                  className="material-icons-outlined text-sm  absolute 
      w-4 h-4 mt-[-0.11875rem] ml-[0.075rem] text-primary-500
       peer-checked:block"
                >
                  done
                </span>
              )}
              I accept the{" "}
              <span className="text-blue-600 font-medium">
                terms and conditions
              </span>
            </label>
            {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
              <div>{formik.errors.acceptedTerms}</div>
            ) : null}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
