import React from "react";
import * as cn from "classnames";

const ProgressBar = ({ percent, dark = false }) => {
  return (
    <div className="h-2 w-full p-0.5 bg-gradient-progressbar-bg rounded-full">
      <div
        className={cn({
          "h-full rounded-full": true,
          "bg-gradient-progressbar-thumb-dark": dark,
          "bg-gradient-progressbar-thumb": !dark,
        })}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
