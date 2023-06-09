import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../Schema";
import Button from "../Button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/v2/AuthContext";

const OtpVerificationForm = ({ phoneNumber }) => {
  const initialValues = {
    code: "",
  };

  const { setVerifyToken } = useAuth();
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    const code = values.verificationCode;

    try {
      // phone or "email" depending on active tab
      await setVerifyToken(code);
      router.push("/auth/register");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div>
          <Link href="https://www.zoficash.com/">
            <h3 className="text-5xl font-bold text-#335EEA font-header text-primary py-6">
              Zofi Cash
            </h3>
          </Link>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="bg-white shadow-md rounded px-20 pt-6 pb-10 mb-4">
              <div className="mb-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-bold mb-2 text-2xl text-primary pt-8 justify-center flex pb-3"
                >
                  Enter Verification Code
                </label>
                <Field
                  type="text"
                  id="code"
                  name="code"
                  className={
                    errors.code && touched.code
                      ? "border-red-500 appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  }
                />
                <ErrorMessage
                  name="code"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="flex items-center justify-between">
                <Button type="submit">Verify OTP</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OtpVerificationForm;
