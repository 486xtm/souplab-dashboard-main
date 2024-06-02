import React from "react";
import EnlargerIcon from "../../../assets/icons/enlarger";

const SearchBox = ({ keywordSetter }) => {
  const styledIcon = React.cloneElement(EnlargerIcon(), {
    className: `h-4 w-4 fill-[#E5E7EB] transition-all`,
  });

  return (
    <div className="flex items-center gap-3 px-4 my-5 w-full h-12 rounded-full border-[#E5E7EB] border bg-white bg-opacity-70">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9985 15.2158L13.8075 11.0026C14.8094 9.79366 15.3071 8.24527 15.1973 6.67899C15.0875 5.11271 14.3785 3.64894 13.2177 2.5917C12.0568 1.53446 10.5333 0.965027 8.96364 1.00166C7.39395 1.0383 5.89869 1.6782 4.78844 2.78844C3.6782 3.89869 3.0383 5.39395 3.00166 6.96364C2.96503 8.53334 3.53446 10.0568 4.5917 11.2177C5.64894 12.3785 7.11271 13.0875 8.67899 13.1973C10.2453 13.3071 11.7937 12.8094 13.0026 11.8075L17.2158 15.9985L17.9985 15.2158ZM4.12093 7.11684C4.12093 6.12875 4.41393 5.16284 4.96289 4.34126C5.51185 3.51969 6.2921 2.87935 7.20499 2.50122C8.11787 2.12309 9.12239 2.02415 10.0915 2.21692C11.0606 2.40969 11.9508 2.88551 12.6495 3.5842C13.3482 4.28289 13.824 5.17308 14.0168 6.14219C14.2095 7.1113 14.1106 8.11582 13.7325 9.0287C13.3543 9.94158 12.714 10.7218 11.8924 11.2708C11.0709 11.8198 10.1049 12.1128 9.11684 12.1128C7.79184 12.1128 6.52111 11.5864 5.5842 10.6495C4.64728 9.71258 4.12093 8.44184 4.12093 7.11684Z"
          fill="#E5E7EB"
        />
      </svg>

      <input
        type="text"
        className="flex flex-1 text-custom-dark font-manrope bg-transparent placeholder:font-normal placeholder:text-[#9CA3AF] focus:outline-none"
        placeholder="Search an item"
        onChange={(e) => keywordSetter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
