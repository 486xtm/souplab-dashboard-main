import React from "react";
import FavoriteItem from "../favorites-list/favorite-item";

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

const FavoritesList = () => {
  return (
    <div>
      <h3 className="max-md:hidden mb-2 font-manrope font-semibold text-[#85868E]">
        FAVORITES
      </h3>
      <div className="flex gap-2 flex-col items-center md:items-start md:p-4 md:bg-gradient-white-linear rounded">
        {MockUpFavoritesList.map((item, index) => (
          <FavoriteItem {...item} key={`favorite-item-${index}`} />
        ))}
        <button className="flex p-2 md:px-5 md:py-[6px] bg-[#F3F3F4] bg-opacity-30 hover:bg-opacity-50 rounded-[10px] md:rounded-full text-white font-manrope font-semibold text-xs border border-white border-dashed transition-all">
          <span className="flex justify-center items-center max-md:w-7 max-md:h-7 max-md:text-2xl">
            +
          </span>
          <span className="max-md:hidden">
            &nbsp;&nbsp;&nbsp;&nbsp;Add Matière/Item
          </span>
        </button>
      </div>
    </div>
  );
};

export default FavoritesList;
