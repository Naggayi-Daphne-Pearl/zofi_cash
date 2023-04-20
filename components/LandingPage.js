import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="display-block px-6">
        <h1 className="text-primary lg:text-5xl font-bold ">
          WELCOME TO ZOFI CASH
        </h1>
        <Link href="/auth/signup">
          <h1 className="text-primary text-2xl underline py-12">
            Click here to register!!
          </h1>
        </Link>
        <footer className="mt-12 pt-12 mx-auto">
          © Copyright 2023. All right reserved, Naggayi-Daphne-Pearl
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
