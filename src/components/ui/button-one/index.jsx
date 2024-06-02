import React from "react";
import * as cn from "classnames";

const ButtonOne = ({ text, className, click }) => {
  return (
    <button
      className={cn([
        "text-white font-inter font-semibold py-3 px-9 bg-primary rounded-full shadow-dark-purple hover:bg-custom-dark-purple transition-all",
        className,
      ])}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default ButtonOne;
