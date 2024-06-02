import React from "react";

const SidebarActionBtn = ({ text, click, icon }) => {
  const styledIcon = React.cloneElement(icon(), {
    className: `md:h-5 md:w-5 h-8 w-8 transition-opacity duration-150 ease-in-out group-hover:opacity-100 fill-white opacity-70 transition-all`,
  });

  return (
    <div
      className="group flex items-center space-x-[10px] max-md:border-2 max-md:p-2 max-md:border-white max-md:border-opacity-[0.48] rounded-[13.6px] md:rounded-[5px] max-md:bg-white max-md:bg-opacity-10 md:p-3 md:hover:bg-custom-border md:hover:bg-opacity-5 transition-all"
      onClick={() => click()}
    >
      <div className="flex-shrink-0">{styledIcon}</div>
      <span className="hidden md:block text-white text-sm font-manrope opacity-70 group-hover:opacity-100 group-hover:text-700 transition-all">
        {text}
      </span>
    </div>
  );
};

export default SidebarActionBtn;
