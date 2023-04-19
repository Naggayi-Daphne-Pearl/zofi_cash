import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../Schema";
import Button from "../Button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/v2/AuthContext";

// if  user logs in 5 times

function LoginPage({ maxLoginAttempts, loginLockoutTime }) {
  
  const initialValues = { email: "", password: "", phone_number: "" };
  const { login, error } = useAuth();

  const [loginAttempts, setLoginAttempts] = useState(0);

  // a user can login using an email or phone number
  const [activeTab, setActiveTab] = useState("phone");
  const router = useRouter();

  // handling submit 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
      toast.success("Welcome to Zofi Cash");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Wrong crendentials");
      setError(error.message);
    }
    // handling maximum login attempts
    if (loginAttempts >= maxLoginAttempts) {
      setTimeout(() => {
        setLoginAttempts(0);
      }, loginLockoutTime * 1000);

      return (
        <div>
          <p>You have been locked out Please try again later</p>
          <p>Login in again in the next: {loginLockoutTime} seconds</p>
        </div>
      );
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
          {({ isSubmitting, errors, touched }) => (
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
                    className={
                      errors.phone_number && touched.phone_number
                        ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    }
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
                    className={
                      errors.email && touched.email
                        ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    }
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
              <div className="block">
                <a
                  href="/auth/forgotpassword"
                  className="text-primary underline px-4"
                >
                  Forgot Password ?
                </a>
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
