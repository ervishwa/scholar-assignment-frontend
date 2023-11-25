import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).max(10).required("First Name is required"),
  lastName: Yup.string().min(3).max(10).required("Last Name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone Number is required"),
});

export default function Home() {
  const [firstName, setFirstName] = useState("Vishnu");
  const [lastName, setLastName] = useState("Thakur");
  const [phoneNumber, setPhoneNumber] = useState("9821820403");
  const [editMode, setEditMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleEditClick = () => {
    setValidationErrors({});
    setEditMode(true);
  };

  const handleSaveClick = () => {
    const valuesToValidate = { firstName, lastName, phoneNumber };
    validationSchema
      .validate(valuesToValidate, { abortEarly: false })
      .then(() => {
        setEditMode(false);
        // Add logic to save the edited values if needed
      })
      .catch((errors) => {
        const newErrors = {};
        errors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setValidationErrors(newErrors);
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="text-3xl font-bold my-4">
        Welcome {firstName} {lastName}
      </p>
      <div className="w-3/4 bg-[#9AD0C2] p-5">
        <div className="py-2">
          <label htmlFor="firstName" className="text-base font-medium">
            First Name :{" "}
            {editMode ? (
              <div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-2 md:w-1/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
                />
                {validationErrors.firstName && (
                  <div className="text-red-500 text-xs">
                    {validationErrors.firstName}
                  </div>
                )}
              </div>
            ) : (
              <span>{firstName}</span>
            )}
          </label>
        </div>
        <div className="py-2">
          <label htmlFor="lastName" className="text-base font-medium">
            Last Name :{" "}
            {editMode ? (
              <div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-2 md:w-1/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
                />
                {validationErrors.lastName && (
                  <div className="text-red-500 text-xs">
                    {validationErrors.lastName}
                  </div>
                )}
              </div>
            ) : (
              <span>{lastName}</span>
            )}
          </label>
        </div>
        <div className="py-2">
          <label htmlFor="phoneNumber" className="text-base font-medium">
            Phone Number :{" "}
            {editMode ? (
              <div>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-2 md:w-1/4 bg-gray-200 p-1.5 rounded-md border border-gray-400"
                />
                {validationErrors.phoneNumber && (
                  <div className="text-red-500 text-xs">
                    {validationErrors.phoneNumber}
                  </div>
                )}
              </div>
            ) : (
              <span>{phoneNumber}</span>
            )}
          </label>
        </div>
        <div className="flex gap-4 py-2 md:w-1/4">
          <button
            className="border border-black p-2 w-1/2 bg-[#427D9D] rounded-md"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            className="border border-black p-2 w-1/2 bg-[#427D9D] rounded-md"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
