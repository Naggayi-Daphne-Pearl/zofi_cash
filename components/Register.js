import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";
import { countries } from "./countries";

const KYCPage = () => {
  const [selectedOption, setSelectedOption] = useState(countries[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-4 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="w-full px-6 py-8 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div class="grid grid-cols-2 gap-10">
              <div class="h-30">
                <label className="flex justify-center p-2 ">Email</label>
                <input
                  type="email"
                  name="email"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:primary  p-2"
                />
              </div>
              <div class="h-30">
                <label className="flex justify-center p-2 ">Roles</label>
                <select
                  name="roles"
                  class="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                >
                  <option class="text-gray-700 hover:bg-gray-50 focus:bg-gray-10">
                    Employer
                  </option>
                  <option class="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                    Employee
                  </option>
                  <option class="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                    Payroll
                  </option>
                  <option class="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                    Staker
                  </option>
                </select>
              </div>
              <div class="h-30">
                <label className="flex justify-center p-2 ">Password</label>
                <input
                  type="password"
                  name="password"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                />
              </div>
              <div class="h-30">
                <label className="flex justify-center p-2 ">
                  Repeat Password
                </label>
                <input
                  type="password"
                  name="repeat_password"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                />
              </div>
              <div class="h-30">
                <label className="flex justify-center p-2 ">Country Code</label>
                <input
                  type="text"
                  name="country_code"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                />
              </div>
              <div class="h-30">
                <label className="flex justify-center p-2 ">Address</label>
                <input
                  type="address"
                  name="ip"
                  className="block border-primary w-full mt-1 border-gray-70 rounded-md shadow-md  focus:ring-primary focus:ring-opacity-50 p-2"
                />
              </div>
            </div>

            <div className=" pt-8 flex justify-center">
              <Button>Continue</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KYCPage;
