import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import Button from "./Button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/AuthContext";

// if  user logs in 5 times
const MAX_LOGIN_ATTEMPTS = 5;
function LoginPage({}) {
  const initialValues = { email: "", password: "", phone_number: "" };
  const { login, error } = useAuth();

  const [loginAttempts, setLoginAttempts] = useState(0);
  const [loginLocked, setLoginLocked] = useState(false);
  // tab
  const [activeTab, setActiveTab] = useState("phone");
  const router = useRouter();

  // handle maximum login attempts
  // useEffect(() => {
  //   if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
  //     setLoginLocked(true);
  //     setTimeout(() => {
  //       setLoginAttempts(0);
  //       setLoginLocked(false);
  //     }, 5 * 60 * 1000); // account locked in for 5  minutes
  //   }
  // }, [loginAttempts]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto h-screen my-20 items-center">
        <h1 className="flex justify-center sm:text-3xl text-5xl text-primary py-10 text-header font-bold">
          Zofi Cash
        </h1>
        <div className="bg-white shadow-md ">
          <h1 className="flex justify-center text-3xl text-primary py-10 font-semi">
            Login Account
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
            <Form className="bg-white shadow-md px-20 pt-6 pb-8 mb-4 ">
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
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <Button
                type="submit"
                className="flex items-center justify-center mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Log In"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
