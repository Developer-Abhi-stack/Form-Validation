import React, { useState } from "react"; // Importing necessary modules from React.
import "animate.css"; // Importing CSS animation library for animations.

const App = () => {
  // Define the initial state for form fields.
  const model = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
  };

  // Define the initial state for form error messages.
  const errModel = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    username: null,
    mobile: null,
  };

  // useState hooks to manage form state and error state.
  const [form, setForm] = useState(model);
  const [formError, setFormError] = useState(errModel);

  // Validator function to check if a form field is empty and set error messages accordingly.
  const validator = (key, value) => {
    if (!value.length) {
      setFormError({
        ...formError,
        [key]: `${key} value is required.`,
      });
    } else {
      setFormError({
        ...formError,
        [key]: null,
      });
    }
  };

  // Function to handle form field changes.
  const getFormValue = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key]: value,
    });
    validator(key, value);
  };

  // Function to handle form submission.
  const signUp = (e) => {
    e.preventDefault(); // Prevent the default form submission.
    console.log(form); // Log the form data to the console.
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="w-[450px] p-5 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
        <h1 className="text-center text-2xl font-bold mb-3">Sign Up Form</h1>
        <form className="flex flex-col gap-4" onSubmit={signUp}>
          {/* Firstname Input */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Firstname:</label>
            <input
              onChange={getFormValue}
              className="border border-gray-300 rounded p-2"
              type="text"
              name="firstname"
              placeholder="Enter your first name here"
            />
            {/* Display error message for firstname if exists */}
            {formError.firstname && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.firstname}
              </small>
            )}
          </div>

          {/* Lastname Input */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Lastname:</label>
            <input
              onChange={getFormValue}
              className="border border-gray-300 rounded p-2"
              type="text"
              name="lastname"
              placeholder="Enter your last name here"
            />
            {/* Display error message for lastname if exists */}
            {formError.lastname && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.lastname}
              </small>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Email:</label>
            <input
              onChange={getFormValue}
              className="border border-gray-300 rounded p-2"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            {/* Display error message for email if exists */}
            {formError.email && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.email}
              </small>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Password:</label>
            <input
              onChange={getFormValue}
              className="border border-gray-300 rounded p-2"
              type="password"
              name="password"
              placeholder="**************"
            />
            {/* Display error message for password if exists */}
            {formError.password && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.password}
              </small>
            )}
          </div>

          {/* Username Input */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Username:</label>
            <input
              onChange={getFormValue}
              className="border border-gray-300 rounded p-2"
              type="text"
              name="username"
              placeholder="@username"
            />
            {/* Display error message for username if exists */}
            {formError.username && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.username}
              </small>
            )}
          </div>

          {/* Mobile Number Input */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Mobile No:</label>
            <input
              onChange={getFormValue}
              className="border border-gray-300 rounded p-2"
              type="number"
              name="mobile"
              placeholder="6201534844"
            />
            {/* Display error message for mobile if exists */}
            {formError.mobile && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.mobile}
              </small>
            )}
          </div>

          {/* Submit Button */}
          <button className="bg-blue-500 text-white rounded p-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App; // Export the App component as the default export.
