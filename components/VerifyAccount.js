import React, { useState } from "react";
import Button from "./Button";
import validationSchema from "./Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";

const VerifyAccount = () => {
  const initialValues = { email: "" };
  const [otpSent, setOtpSent] = useState(false);

  // tab
  const [activeTab, setActiveTab] = useState("phone");

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    event.preventDefault();
    try {
      let apiUrl;
      if (activeTab === "phone") {
        apiUrl = "https://staging-auth-api.zoficash.com/api/v1/send-sms";
      } else {
        apiUrl = "https://staging-auth-api.zoficash.com/api/v1/send-email";
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`Failed to send verification ${activeTab}.`);
      }
      setOtpSent(true);
    } catch (error) {
      setErrors({ [activeTab]: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto h-screen my-20 items-center">
        <h1 className="flex justify-center text-5xl font-bold sm:text-3xl text-primary py-10 text-header ">
          Zofi Cash
        </h1>
        <div className="bg-white shadow-md ">
          <h1 className="flex justify-center text-3xl text-primary py-6">
            Verify Account
          </h1>
          <button
            className={`py-2 px-6 font-semibold border-b-2 ${
              activeTab === "phone" ? "border-primary" : ""
            }`}
            onClick={() => setActiveTab("phone")}
          >
            Phone
          </button>
          <button
            className={`py-2 px-4 font-semibold border-b-2 ${
              activeTab === "email" ? "border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("email")}
          >
            Email
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema(activeTab)}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-md px-20 pt-6 pb-8 mb-4">
              {activeTab === "phone" && (
                <div className="mb-4">
                  <label htmlFor="phone" className="block font-medium mb-2">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    className="w-full border border-gray-300 p-2 rounded"
                  />

                  <ErrorMessage
                    name={activeTab === "phone" ? "phone_number" : "email"}
                    component="div"
                    className="text-red-500 text-xs italic"
                  />

                  <Button
                    type="submit"
                    className="flex items-center justify-center mt-6 text-3xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Verify Number"}
                  </Button>
                </div>
              )}
              {activeTab === "email" && (
                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  <ErrorMessage
                    name={activeTab === "email" ? "email" : "phone_number"}
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                  <Button
                    type="submit"
                    className="flex items-center justify-center mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Verify Email"}
                  </Button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VerifyAccount;
