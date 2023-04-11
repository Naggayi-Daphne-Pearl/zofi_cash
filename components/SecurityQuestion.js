import React from "react";
import Button from "./Button";

const SecurityQuestion = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="https://www.zoficash.com/">
            <h3 className="text-4xl font-bold text-#335EEA font-header text-primary">
              Zofi Cash
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div className="mt-4">
              <label
                name="security_question"
                className="block text-md font-medium text-gray-700 font-body flex justify-center text-xl p-2 "
              >
                <select
                  name="roles"
                  class="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                >
                  <option class="text-gray-700 hover:bg-primary focus:bg-gray-10">
                    What is your city of birth?
                  </option>
                  <option class="text-gray-700 hover:bg-primary focus:bg-primary">
                    What is your favorite color?
                  </option>
                  <option class="text-gray-700 hover:bg-primary focus:bg-primary">
                    What is your childhood nickname?
                  </option>
                </select>
              </label>
              <div name="security_answer" className="flex flex-col items-start">
                <input
                  type="text"
                  name="text"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                />
              </div>
            </div>
            <div className=" pt-8 flex justify-center">
              <Button>Confirm</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecurityQuestion;
