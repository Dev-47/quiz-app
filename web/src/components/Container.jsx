import React from "react";

export default function Container({ children }) {
  return (
    <div className="h-full border-2 container mx-auto md:p-2 p-4">
      {children}
    </div>
  );
}
