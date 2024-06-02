import React, { useEffect, useState } from "react";
import * as cn from "classnames";
import { Collapse } from "react-collapse";
import DataTable from "react-data-table-component";

import AngleDown from "../../../assets/icons/angle-down";
import ProgressBar from "../progress-bar";
import VerticalDivider from "../vertical-divider";
import ChatIcon from "../../../assets/icons/chart-icon";
import ListIcon from "../../../assets/icons/list-icon";
import ButtonOne from "../button-one";

import { columns, customStyles } from "../../../constants/mockup-data/library";

const MaterialCard = ({ data }) => {
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const totalsSummary = data.data.reduce(
      (accumulator, item) => {
        accumulator.totalSum += item.total;
        accumulator.doneSum += item.done;
        return accumulator;
      },
      { totalSum: 0, doneSum: 0 }
    );

    setTotal(totalsSummary.totalSum);
    if (totalsSummary.totalSum > 0) {
      setCompleted((totalsSummary.doneSum / totalsSummary.totalSum) * 100);
    }
  }, [data]);

  return (
    <div className="shadow-card rounded-lg">
      <div className="flex items-center gap-4 px-5 py-7 bg-white rounded-t-lg">
        <img src={data.logo} width={32} className="object-contain" />
        <div className="flex flex-col justify-center flex-1 gap-2">
          <h3 className="w-full font-manrope font-extrabold">{data.name}</h3>
          <ProgressBar percent={completed} />
        </div>
        <VerticalDivider className="h-16 mx-6" />
        <div className="flex px-5 py-2 bg-[#FAFAFA] rounded-md">
          <div className="flex flex-col justify-center items-center">
            <ChatIcon />
            <span className="mt-2 text-xs text-[#2F3037] font-manrope font-bold leading-none">
              {completed.toFixed(0)} %
            </span>
            <span className="text-xs text-[#C8C9CE] font-manrope">
              completed
            </span>
          </div>
          <div className="px-6">
            <VerticalDivider className="h-12" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <ListIcon />
            <span className="mt-2 text-xs text-[#2F3037] font-manrope font-bold leading-none">
              {total}
            </span>
            <span className="text-xs text-[#C8C9CE] font-manrope">
              questions
            </span>
          </div>
        </div>
        <ButtonOne
          text="Start"
          click={() => {}}
          className="h-[42px] !px-4 !py-3 leading-none"
        />
      </div>
      <div className="bg-[#FCFCFD]">
        <Collapse
          isOpened={expanded}
          initialStyle={{ height: 0, overflow: "hidden" }}
        >
          <DataTable
            columns={columns}
            data={data.data}
            customStyles={customStyles}
          />
        </Collapse>
      </div>
      <div className="flex items-center h-14 px-4 bg-[#FAFAFA] rounded-b-lg">
        <button
          className="flex items-center cursor-pointer"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <span
            className={cn({
              "transition-all duration-300": true,
              "rotate-180": expanded,
            })}
          >
            <AngleDown />
          </span>
          <span className="ml-4 font-inter font-medium text-sm text-[#85868E]">
            Détails
          </span>
        </button>
      </div>
    </div>
  );
};

export default MaterialCard;
