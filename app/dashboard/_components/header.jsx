"use client";
import { Button } from "../../../components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  console.log("Current path:", path);

  return (
    <div className="p-3 px-5 flex items-center justify-between bg-white shadow-md">
      <div className="flex gap-3 item-center">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/logo.jpg"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/">
          <h2 className="font-bold text-xl">AI Short Vid</h2>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href={path === "/dashboard" ? "/" : "/dashboard"}>
          <Button>{path === "/dashboard" ? "Home" : "Dashboard"}</Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
