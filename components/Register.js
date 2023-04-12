import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import Button from "./Button";

function Register() {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    // handle form submission
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
            <div className="grid grid-cols-2 gap-10">
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
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-1"
                >
                  Roles
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
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-1"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      : "appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  }
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                >
                  Country
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
