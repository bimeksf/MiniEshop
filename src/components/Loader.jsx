
import React from "react";

export default function Loader() {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4 border rounded-lg shadow-md">
      <div className="bg-gray-300 h-40 rounded-md"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
      <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
    </div>
  );
}
