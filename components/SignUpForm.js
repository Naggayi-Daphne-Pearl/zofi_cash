import React from "react";
import Button from "./Button";

const SignupForm = () => {
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
              <label className="block text-md font-medium text-gray-700 font-body flex justify-center text-xl p-2 ">
                Phone Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="text"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                />
              </div>
            </div>
            <div className=" pt-8 flex justify-center">
              <Button>Verify Number</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
