import React, { useState } from "react";
import "animate.css";

const App = () => {
  const model = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
  };

  const errModel = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    username: null,
    mobile: null,
  };
  const [form, setForm] = useState(model);
  const [formError, setFormError] = useState(errModel);

  const validator = (key, value) => {
    if (!value.length) {
      setFormError({
        ...formError,
        [key]: `${key} value is required`,
      });
    } else {
      setFormError({
        ...formError,
        [key]: null,
      });
    }
  };
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

  const signUp = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="w-[450px] p-5 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
        <h1 className="text-center text-2xl font-bold mb-3">Sign Up Form</h1>
        <form className="flex flex-col gap-4" onSubmit={signUp}>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Firstname:</label>
            <input
              onChange={getFormValue}
              className=" border border-gray-300 rounded p-2"
              type="text"
              name="firstname"
              placeholder="Enter your first name here"
            />
            {formError.firstname && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.firstname}
              </small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Lastname:</label>
            <input
              onChange={getFormValue}
              className=" border border-gray-300 rounded p-2"
              type="text"
              name="lastname"
              placeholder="Enter your last name here"
            />
            {formError.lastname && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.lastname}
              </small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Email:</label>
            <input
              onChange={getFormValue}
              className=" border border-gray-300 rounded p-2"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            {formError.email && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.email}
              </small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Password:</label>
            <input
              onChange={getFormValue}
              className=" border border-gray-300 rounded p-2"
              type="password"
              name="password"
              placeholder="**************"
            />
            {formError.password && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.password}
              </small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Username:</label>
            <input
              onChange={getFormValue}
              className=" border border-gray-300 rounded p-2"
              type="text"
              name="username"
              placeholder="@username"
            />
            {formError.username && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.username}
              </small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Mobile No:</label>
            <input
              onChange={getFormValue}
              className=" border border-gray-300 rounded p-2"
              type="number"
              name="mobile"
              placeholder="6201534844"
            />
            {formError.mobile && (
              <small className="text-rose-500 text-sm font-semibold">
                {formError.mobile}
              </small>
            )}
          </div>
          <button className="bg-blue-500 text-white rounded p-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
