import React from "react";
import LeftSidebar from "./left-sidebar";
import Breadcrumbs from "./breadcrumbs";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-screen bg-custom-dark">
      <LeftSidebar />
      <main className="flex flex-col flex-1 h-screen w-full px-16 py-11 overflow-y-scroll scroll-custom bg-gradient-gray-linear rounded-tl-lg">
        <Breadcrumbs />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
