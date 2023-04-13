import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="display-block px-6">
        <h1 className="text-primary text-5xl">WELCOME TO ZOFI CASH</h1>
        <a href="/auth/signup">
          <h1 className="text-primary text-2xl underline py-12">
            Click here to register!!
          </h1>
        </a>
        <footer className="mt-12 pt-12">
          © Copyright 2023. All right reserved, Naggayi-Daphne-Pearl
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
