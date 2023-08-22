import React from "react";
import DashNav from "../components/DashNav";
import RightSec from "../components/RightSec";

const Dashboard = () => {
  return (
    <div className="dash--container w-screen h-full overflow-hidden box-border grid gap-x-6 px-[3rem] py-6 grid-row-1 grid-cols-5 bg-[#F5F5F5]">
      <DashNav />
      <RightSec />
    </div>
  );
};

export default Dashboard;
