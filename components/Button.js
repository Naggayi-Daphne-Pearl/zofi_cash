import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-primary font-semibold  font-body py-2 px-6 rounded md:ml-8  uppercase font-header 
    duration-500 text-white"
    >
      {props.children}
    </button>
  );
};

export default Button;
