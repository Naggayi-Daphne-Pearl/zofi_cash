import { useState } from "react";

const OtpVerificationForm = ({ phoneNumber }) => {
  const [otpCode, setOtpCode] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    // Call an API to verify the OTP code entered by the user
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ phoneNumber, otpCode }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setOtpVerified(true);
    } else {
      // Handle error
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
          onSubmit={handleOtpVerification}
        >
          {({ errors, touched }) => (
            <Form className="bg-white shadow-md rounded px-20 pt-6 pb-10 mb-4">
              <h1 className="flex justify-center text-3xl text-primary py-8">
                Sign Up
              </h1>
              <div className="mb-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-bold mb-2 text-2xl justify-center flex pb-3"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "border-red-500 appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  }
                />
                <ErrorMessage
                  name="phoneNumber"
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
