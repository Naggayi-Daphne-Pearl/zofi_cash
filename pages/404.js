import React from "react";
import Link from "next/link";

const Page_Not_Found = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="display-block px-6">
        <h1 className="text-primary lg:text-5xl font-bold mb-12">404 || PAGE NOT FOUND </h1>
        <Link href="/">
          <h1 className="text-primary text-2xl underline py-12 mt-12 ">
            Go to homepage
          </h1>
        </Link>
        <footer className="mt-12 pt-12 mx-auto">
          © Copyright 2023. All right reserved, Naggayi-Daphne-Pearl
        </footer>
      </div>
    </div>
  );
};

export default Page_Not_Found;
