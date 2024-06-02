import React from "react";
import * as cn from "classnames";

const VerticalDivider = ({ className }) => {
  return (
    <div
      className={cn(["max-md:hidden h-full w-px bg-[#EDEDF0]", className])}
    />
  );
};

export default VerticalDivider;
