import React, { useState } from "react";
import Button from "./Button";
import { BsPower, BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="flex justify-between px-20 bg-white shadow-md pt-4">
        <div>
          <Link href="https://www.zoficash.com/">
            <h1 className=" text-2xl text-primary pt-2 pb-3 px-12 font-bold italic hover:underline">
              Zofi cash
            </h1>
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            <BsFillPersonFill />
          </button>
          {isOpen && (
            <div className=" absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                href="/auth/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Log Out
              </Link>
              <Link
                href="/auth/deactivate"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                Deactivate account
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
