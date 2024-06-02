import React from "react";

const TabPanel = ({ isActive, children }) => {
  return isActive ? <div>{children}</div> : <></>;
};

export default TabPanel;
