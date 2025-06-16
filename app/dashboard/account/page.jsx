import { UserButton } from "@clerk/nextjs";
import React from "react";

const AccountPage = () => {
  // Import Clerk hooks to get user details

  return (
    <>
      <h2 className="text-lg font-semibold mb-8 text-blue-700 text-center">
        {" "}
        This is in development Phase
      </h2>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Account</h1>
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6">
          <UserButton />
          <span className="text-gray-700 font-medium border-b-2 border-blue-300 pb-1">
            Manage your account
          </span>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
