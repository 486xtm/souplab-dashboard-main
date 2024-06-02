import React from "react";
import * as cn from "classnames";

const TabNav = ({ text, isActive, click }) => {
  return (
    <button
      className={cn({
        "relative py-4 font-bold text-custom-dark text-opacity-70 hover:text-opacity-100 transition-all": true,
        "after:absolute after:after-content after:h-1 after:w-full after:bg-custom-dark after:bottom-0 after:left-0 after:rounded-t-md": isActive,
      })}
      onClick={() => click()}
    >
      {text}
    </button>
  );
};

export default TabNav;
