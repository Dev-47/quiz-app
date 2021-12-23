import React from "react";

export default function BaseLayout({ children }) {
  return (
    <div className="w-full h-screen bg-gray-900 text-white">{children}</div>
  );
}
