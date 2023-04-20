import React, { useState } from "react";
import Button from "../Button";
import validationSchema from "../Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OtpVerfication from "../v1/OtpVerficiationForm";
import { useAuth } from "../../contexts/v2/AuthContext";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const initialValues = { security_answer: "", security_question: "" };

  const router = useRouter();

  const questions = [
    { question: "What is your city of birth?" },
    { question: "What is your favorite color?" },
    { question: "What is your childhood nickname?" },
  ];
  const [selectQuestion, setSelectQuestion] = useState("");
  function handleChangeQuestion(event) {
    setSelectQuestion(event.target.value);
  }

  const { forgotPassword } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await forgotPassword(security_answer, security_question);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <h1 className="flex justify-center sm:text-3xl text-5xl text-primary py-10 text-header font-bold">
          Zofi Cash
        </h1>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <h1 className="flex justify-center text-3xl text-primary py-10 font-semi">
            Forgot  Password
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="mt-4">
                  <label
                    name="security_question"
                    className="block text-md font-medium text-gray-700 font-body flex justify-center text-xl p-2 "
                  >
                    <Field
                      as="select"
                      id="security_question"
                      name="security_question"
                      value={selectQuestion}
                      onChange={handleChangeQuestion}
                      className="appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select Security Answer</option>
                      {questions.map((role) => (
                        <option
                          key={role.question}
                          value={role.security_question}
                        >
                          {role.question}
                        </option>
                      ))}
                    </Field>
                  </label>
                  <div
                    name="security_answer"
                    className="flex flex-col items-start"
                  >
                    <label
                      htmlFor="security_answer"
                      className="block text-gray-700 font-bold mb-1 text-xl justify-center flex pb-2"
                    ></label>
                    <Field
                      type="tel"
                      id="security_answer"
                      name="security_answer"
                      placeholder="Enter your answer"
                      className={
                        errors.security_answer && touched.security_answer
                          ? "border-red-500 appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          : "appearance-none border rounded w-full py-2 px-6 text-gray-700 focus:outline-none focus:shadow-outline"
                      }
                    />
                    <ErrorMessage
                      name="security_answer"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>
                </div>
                <div className=" pt-8 flex justify-center">
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
      </div>
    </div>
  );
};

export default ForgotPassword;
