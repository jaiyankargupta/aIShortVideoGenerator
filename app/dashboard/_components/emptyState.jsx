import Link from "next/link";
import { Button } from "../../../components/ui/button";
import React from "react";

const EmptyState = () => {
  return (
    <div className="py-25 p-5 flex flex-col items-center gap-3 mt-23 border-2 border-dashed">
      <h2>You don't have any short video </h2>
      <Link href={"dashboard/create-new"}>
        <Button> Create New Short Video</Button>
      </Link>
    </div>
  );
};

export default EmptyState;
