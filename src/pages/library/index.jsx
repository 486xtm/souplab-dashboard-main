import React, { useState } from "react";
import TabNav from "../../components/ui/tabs/tab-nav";
import TabPanel from "../../components/ui/tabs/tab-panel";
import SearchBox from "../../components/ui/search-box";
import { materialsData, itemsData } from "../../constants/mockup-data/library";
import MaterialCard from "../../components/ui/material-card";
import ItemCard from "../../components/ui/item-card";

const tabs = ["Matières", "Items"];

const LibraryPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div>
      <h1 className="text-[40px] text-custom-dark font-manrope font-extrabold">
        Library
      </h1>
      <div>
        <div className="flex gap-10 border-b border-[rgba(0,0,0,0.1)]">
          {tabs.map((item, index) => (
            <TabNav
              key={`tab-nav-${index}`}
              text={item}
              isActive={activeTabIndex === index}
              click={() => {
                setActiveTabIndex(index);
              }}
            />
          ))}
        </div>
        <div>
          <TabPanel isActive={activeTabIndex === 0}>
            <SearchBox keywordSetter={setSearchKeyword} />
            <div className="flex flex-col gap-[18px]">
              {materialsData
                .filter((item) =>
                  item.name.toLowerCase().includes(searchKeyword.toLowerCase())
                )
                .map((item, index) => (
                  <MaterialCard key={`material-card-${index}`} data={item} />
                ))}
            </div>
          </TabPanel>
          <TabPanel isActive={activeTabIndex === 1}>
            <SearchBox keywordSetter={setSearchKeyword} />
            <div className="flex flex-col gap-[18px]">
              {itemsData
                .filter((item) =>
                  item.name.toLowerCase().includes(searchKeyword.toLowerCase())
                )
                .map((item, index) => (
                  <ItemCard key={`item-card-${index}`} data={item} />
                ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
