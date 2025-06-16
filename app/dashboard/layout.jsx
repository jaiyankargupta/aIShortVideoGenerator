import React from "react";

import SideNavBar from "./_components/sidenav.";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="hidden md:block h-screen fixed mt-[10px] w-4">
        <SideNavBar />
      </div>

      <main className="md:ml-64 p-10">{children}</main>
    </div>
  );
};

export default DashboardLayout;
