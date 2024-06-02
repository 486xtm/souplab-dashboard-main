import React from "react";
import CrossIcon from "../../../../../assets/icons/cross";
const FavoriteItem = ({ title, image, index }) => {
  const styledIcon = React.cloneElement(CrossIcon(), {
    className: `w-3 h-3`,
  });

  return (
    <div className="group flex gap-1 items-center transition-all">
      <div className="flex items-center gap-1 max-md:border-2 max-md:p-2 max-md:border-white max-md:border-opacity-[0.48] rounded-[10px] md:rounded-full bg-white max-md:bg-opacity-10 md:px-2 md:py-1 md:hover:bg-custom-border transition-all">
        {image ? (
          <img
            src={image}
            className="md:h-5 md:w-5 h-7 w-7 duration-150 ease-in-out transition-all"
          />
        ) : index ? (
          <span className="flex justify-center items-center max-md:w-7 max-md:h-7 md:p-1 duration-150 ease-in-out group-hover:opacity-100 bg-white text-custom-dark text-sm md:text-xs rounded-[6px] md:shadow-light-gray transition-all">
            {index}
          </span>
        ) : (
          <></>
        )}
        <span className="hidden md:block text-white text-xs font-semibold md:text-custom-dark font-manrope opacity-70 md:opacity-100 group-hover:opacity-100 group-hover:text-700 transition-all">
          {title}
        </span>
      </div>
      <div className="max-md:hidden flex justify-center items-center w-4 h-4 bg-white hover:bg-opacity-70 rounded-md transition-all hover:cursor-pointer">
        {styledIcon}
      </div>
    </div>
  );
};

export default FavoriteItem;
