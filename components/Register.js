import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import Button from "./Button";
import { countryCodes } from "./data";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginApi, registerApi } from "@/pages/api/v1/auth";
import { AuthContext } from "@/contexts/AuthContext";

function Register() {
  const initialValues = {
    email: "",
    password: "",
    repeat_password: "",
    phone_number: "",
    country_code: "",
    roles: "",
    ip: "localhost:3000",
  };

  const router = useRouter();
  const [error, setError] = useState(null);

  const [selectRole, setSelectRole] = useState("");

  const roles = [
    {
      id: "1",
      label: "employer",
      id: "2",
      label: "employee",
      id: "3",
      label: "staker",
      id: "4",
      label: "payroll",
    },
  ];

  function handleChangeRole(event) {
    setSelectRole(event.target.value);
  }

  const [selectedcountry_code, setSelectedcountry_code] = useState("");

  function handlecountry_codeChange(event) {
    setSelectedcountry_code(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUserData = {
        phone_number,
        email,
        roles,
        password,
        repeat_password,
        ip: "localhost:3000",
        country_code: "+256",
      };
      await registerApi(newUserData);
      router.push("/auth/security");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4">
            <h1 className="flex justify-center text-3xl text-primary py-8">
              REGISTER FORM
            </h1>
            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              <div className="mb-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={
                    errors.email && touched.email
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="text"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-1"
                >
                  Roles
                </label>
                <Field
                  as="select"
                  id="label"
                  name="role"
                  value={selectRole}
                  onChange={handleChangeRole}
                  className={
                    errors.role && touched.role
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                >
                  <option value="">Select Role</option>
                  {roles.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="roles"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={
                    errors.password && touched.password
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="repeat_password"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-1"
                >
                  Confirm Password
                </label>
                <Field
                  type="repeat_password"
                  id="repeat_password"
                  name="repeat_password"
                  className={
                    errors.repeat_password && touched.repeat_password
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                />
                <ErrorMessage
                  name="repeat_password"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              {/* phone number */}
              {/* 
              <div className="mb-1">
                <label
                  htmlFor="code"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                >
                  code
                </label>
                <Field
                  as="select"
                  id="country_code"
                  name="country_code"
                  value={selectedcountry_code}
                  onChange={handlecountry_codeChange}
                  className={
                    errors.country_code && touched.country_code
                      ? "border-red-500 appearance-none border rounded w-1/4 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-1/4 py-2 px-1 text-gray-700 l focus:outline-none focus:shadow-outline"
                  }
                >
                  <option value="">+256</option>
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="country_code"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div> */}
              <div className="mb-1">
                <label
                  htmlFor="phone_number"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  className={
                    errors.phone_number && touched.phone_number
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 focus:outline-none focus:shadow-outline"
                  }
                />
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="phone_number"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                >
                  IP
                </label>
                <Field
                  type="tel"
                  id="ip"
                  name="ip"
                  className="appearance-none border rounded w-full py-2 px-6 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-6 ">
              <Button type="submit">REGISTER</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
