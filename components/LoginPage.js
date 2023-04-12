import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import Button from "./Button";

function LoginPage() {
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
              Login Form
            </h1>
            <div className="mb-4">
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
                className={
                  errors.email && touched.email
                    ? "border-red-500 appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    : "appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2 text-2xl justify-center flex pb-3"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
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
            <div>
              <a
                href="/signup"
                className="flex justify-start text-primary underline"
              >
                Don't have an account
              </a>
            </div>
            <div className="flex items-center justify-center ">
              <Button type="submit">LOG IN </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
