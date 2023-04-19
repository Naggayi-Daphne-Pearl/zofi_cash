// accounts can be deactivated but not deleted.

import { useState } from "react";
import validationSchema from "./Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./Button";
import { useAuth } from "../contexts/v1/AuthContext";
import { useRouter } from "next/router";


const UserProfilePage = () => {
  const [accountActive, setAccountActive] = useState(true);
  const router = useRouter();


  const handleDeactivation = async (e) => {
    e.preventDefault();
    // Call an API to deactivate the user's account
    const response = await fetch("/api/deactivate-account", {
      method: "POST",
      body: JSON.stringify({
        /* Deactivation data */
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setAccountActive(false);
      router.push("/auth/login");
    } else {
      // Handle deactivation error
      console.error("account failed to be activated");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleDeactivation}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4">
              <h1 className="flex justify-center text-3xl text-primary py-8">
                Deactivate Account
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
              {/* <p>Account status: {accountActive ? "Active" : "Inactive"}</p> */}

              <div className="flex items-center justify-center ">
                <Button
                  type="submit"
                  className="flex items-center justify-between mt-8"
                  disabled={isSubmitting}
                  onClick={handleDeactivation}
                >
                  Deactivate
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UserProfilePage;
