import React from "react";
import VerticalDivider from "../vertical-divider";
import ProgressBar from "../progress-bar";
import ChatIcon from "../../../assets/icons/chart-icon";
import ListIcon from "../../../assets/icons/list-icon";
import EyeIcon from "../../../assets/icons/eye";
import EditIcon from "../../../assets/icons/edit";

const ItemCard = ({ data }) => {
  return (
    <div className="flex items-center px-12 pt-3 pb-4 shadow-card rounded-lg bg-white">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-manrope font-bold">
          {data.index}. {data.name}
        </h3>
        <div className="max-w-[640px]">
          <ProgressBar
            percent={data.total > 0 ? (data.done / data.total) * 100 : 0}
          />
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <ChatIcon />
            <span className="font-manrope text-xs text-[#85868E]">
              {data.total > 0 ? ((data.done / data.total) * 100).toFixed(0) : 0}
              % completed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ListIcon />
            <span className="font-manrope text-xs text-[#85868E]">
              {data.total} Questions
            </span>
          </div>
        </div>
      </div>
      <VerticalDivider className="!h-[58px] mx-8" />
      <div className="flex gap-5">
        <button className="group">
          <EyeIcon />
        </button>
        <button className="group">
          <EditIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
