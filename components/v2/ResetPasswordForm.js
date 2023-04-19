import React, { useState } from "react";
import Button from "../Button";
import validationSchema from "../Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuth } from "../../contexts/v2/AuthContext";

const ForgotPassword = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
    security_answer: "",
  };

  const { resetPassword, error } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }
    try {
      setError("");
      await resetPassword(
        email,
        security_question,
        security_answer,
        newPassword
      );
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
        {({ errors, touched, isSubmitting }) => (
          <Form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4">
            <h1 className="flex justify-center text-3xl text-primary py-8">
              Reset Password
            </h1>
            <div className="mb-4">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email here"
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
            <div className="mb-4">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your new password"
                className={
                  errors.password && touched.password
                    ? "border-red-500 appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    : "appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            {error && <div>{error}</div>}
            <div className="flex items-center justify-center ">
              <Button
                type="submit"
                className="flex items-center justify-between mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Reset"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
