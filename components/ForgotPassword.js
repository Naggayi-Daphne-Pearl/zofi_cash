import React, { useState } from "react";
import Button from "./Button";
import validationSchema from "./Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OtpVerfication from "./OtpVerficiationForm";
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const initialValues = { email: "" };

  const { forgotPassword, error } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await forgotPassword(email);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div>
          <a href="https://www.zoficash.com/">
            <h3 className="text-5xl font-bold text-#335EEA font-header text-primary py-6">
              Zofi Cash
            </h3>
          </a>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="bg-white shadow-md rounded px-20 pt-6 pb-10 mb-4">
              <h1 className="flex justify-center text-3xl text-primary py-8">
                Forgot Password?
              </h1>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2 text-2xl justify-center flex pb-3"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={
                    errors.email && touched.email
                      ? "border-red-500 appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              {error && <div>{error}</div>}
              <div className="flex items-center justify-center ">
                <a href="/auth/resetpassword">
                  <Button type="submit" onSubmit={handleSubmit}>
                    Reset Password
                  </Button>
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
