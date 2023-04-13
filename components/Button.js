import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-primary font-bold  font-body py-2 px-6 rounded   uppercase font-body text-xl my-4
    duration-500 text-white text-xl hover:bg-white hover:text-primary border-2 border-primary"
      type="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
