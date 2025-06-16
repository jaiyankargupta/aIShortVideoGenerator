import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../@/components/ui/alert-dialog";
import { useState } from "react";
import { useEffect } from "react";

const CustomLoading = ({ loading, onCancel }) => {
  function handleLoadingChange() {
    if (onCancel) {
      onCancel();
    }
  }

  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent
          borderRadius="md"
          className="w-full max-w-md flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <span className="block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
            </div>
            <div>Generating... Please wait</div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              stopPropagation
              onClick={handleLoadingChange}
              className="bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-4 py-2"
            >
              Stop Generating
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CustomLoading;
