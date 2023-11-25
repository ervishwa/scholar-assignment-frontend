import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).max(10).required("First Name is required"),
  lastName: Yup.string().min(3).max(7).required("Last Name is required"),
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
  const navigate = useNavigate();

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
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted with values:", values);
      resetForm();
      navigate("/home");
    },
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#7ED7C1]">
      <div className="w-3/4 md:w-2/5 p-3 shadow-xl rounded-md  px-4 bg-[#9AD0C2]">
        <p className="text-4xl font-bold my-5">Registration Form</p>
        <form onSubmit={formik.handleSubmit} className="">
          <div className="py-2 my-1 mb-2 max-h-24">
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
              className="mt-2 w-3/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-xs text-red-500 mt-2">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="py-2 my-1 mb-2 max-h-24">
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
              className="mt-2 w-3/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-xs text-red-500 mt-2">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
          <div className="py-2 my-1 mb-2 max-h-24">
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
              className="mt-2 w-3/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-red-500 mt-2">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="py-2 my-1 mb-2 max-h-24">
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
              className="mt-2 w-3/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-xs text-red-500 mt-2">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <div className="py-2 my-1 mb-2 max-h-24">
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
              className="mt-2 w-3/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-xs text-red-500 mt-2">
                {formik.errors.username}
              </div>
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
                className="appearance-none h-4 w-4 mr-2 bg-gray-200 rounded border border-gray-400"
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
              <span className="ml-1 text-blue-600 font-medium">
                terms and conditions
              </span>
            </label>
            {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
              <div className="text-xs text-red-500 mt-2">
                {formik.errors.acceptedTerms}
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-3/4 mx-auto bg-[#427D9D] p-1 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
