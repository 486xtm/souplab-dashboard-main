import React from "react";
import { Link  } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MockUpFavoritesList = [
  {
    title: "Neurologie",
    image: "/images/neurologie.png",
  },
  {
    title: "Myasthénie",
    index: 96,
  },
  {
    title: "Hypercalcémie",
    index: 268,
  },
];

const SidebarTab = ({ title, link, icon }) => {
  let {pathname} = useLocation();
  const isActive = pathname === link;

  // Generate icon component with additional props
  const styledIcon = React.cloneElement(icon, {
    className: `md:h-5 md:w-5 h-8 w-8 transition-opacity duration-150 ease-in-out group-hover:opacity-100 fill-white opacity-70 transition-all`,
  });

  return (
    <Link
      to={link}
      className="max-md:flex max-md:justify-center transition-all"
    >
      <div
        className={`group flex items-center space-x-3 max-md:border-2 max-md:p-2 max-md:border-white max-md:border-opacity-[0.48] rounded-[13.6px] md:rounded-[5px] max-md:bg-white max-md:bg-opacity-10 md:p-3 md:hover:bg-custom-border md:hover:bg-opacity-5 transition-all ${
          isActive ? "md:bg-custom-border md:bg-opacity-5" : ""
        }`}
      >
        <div className="flex-shrink-0">{styledIcon}</div>
        <span className="hidden md:block text-white text-sm font-manrope opacity-70 group-hover:opacity-100 group-hover:text-700 transition-all">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default SidebarTab;
