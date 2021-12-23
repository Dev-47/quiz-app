import React from "react";
import { Routes, Route } from "react-router-dom";

import Test from "../pages/Test";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
}
