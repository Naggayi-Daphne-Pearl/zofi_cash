import React, { useState } from "react";
import Button from "./Button";
import validationSchema from "./Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
    security_answer: "",
  };

  const { forgotPassword, error } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setError("");
      await resetPassword(security_answer, password);
      router.push("/auth/login");
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
              Reset Password
            </h1>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-gray-700 font-bold mb-2 text-2xl justify-center flex pb-3"
              >
                Email code 
              </label>
              <Field
                type="code"
                id="code"
                name="code"
                placeholder="Enter code here"
                className={
                  errors.code && touched.code
                    ? "border-red-500 appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    : "appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
              />
              <ErrorMessage
                name="code"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            {error && <div>{error}</div>}
            <div className="flex items-center justify-center ">
              <Button type="submit" onSubmit={handleSubmit}>
                Reset Password
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
