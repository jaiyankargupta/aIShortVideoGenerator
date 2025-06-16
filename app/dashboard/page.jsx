"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import React from "react";
import EmptyState from "./_components/emptyState";
import Link from "next/link";

const Dashboard = () => {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <Link href={"/dashboard/create-new"}>
          <Button className={`md:ml-64`}>+ Create new</Button>
        </Link>
      </div>
      {videoList?.length == 0 && <EmptyState />}
    </div>
  );
};

export default Dashboard;
